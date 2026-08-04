const { Router } = require("express");
const multer = require("multer");
const router = Router();
const Blog = require("../models/blog");
const path = require("path");
const Comment = require("../models/comment");



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve("./public/uploads"));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage: storage });

router.get("/add-new", (req, res) => {
  return res.render("addBlog", {
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate('createdBy');
  const comments = await Comment.find({ blog: req.params.id }).populate('createdBy');
  return res.render("blog", {
    user: req.user,
    blog: blog,
    comments,
  });
  console.log(comments);
});

router.post("/", upload.single("coverImage"), async (req, res) => {
  const { title, body } = req.body;
  const blog = await Blog.create({
    title,
    body,
    createdBy: req.user._id,
    coverImageURL: req.file ? `/uploads/${req.file.filename}` : null,
  });
  return res.redirect(`/blog/${blog._id}`);
});


router.post('/comment/:blogId', async(req,res)=>{
   await Comment.create({
    content:req.body.content,
    blog: req.params.blogId,
    createdBy: req.user._id
  })
  return res.redirect(`/blog/${req.params.blogId}`)
})


module.exports = router;
