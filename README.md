#  Blogify

Blogify is a full-stack blogging web application built using **Node.js, Express.js, MongoDB, EJS, and Bootstrap**. It allows users to create an account, securely log in, publish blogs with cover images, and interact with other users through comments.

##  Features

-  User Authentication (Signup & Login)
-  JWT-based Authentication
-  Secure Password Hashing
-  Create and Publish Blogs
-  Upload Blog Cover Images using Multer
-  Add Comments on Blogs
-  User Profiles with Profile Images
-  Responsive User Interface using Bootstrap
-  MongoDB Database Integration

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JSON Web Token (JWT)
- Node Crypto

### File Upload
- Multer

---

##  Project Structure

```text
Blogify/
│
├── middlewares/
├── models/
├── public/
│   ├── uploads/
│   └── images/
├── routes/
├── services/
├── views/
│   ├── partials/
│   ├── home.ejs
│   ├── blog.ejs
│   ├── signin.ejs
│   └── signup.ejs
│
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/blogify.git
```

Go to the project directory

```bash
cd blogify
```

Install dependencies

```bash
npm install
```

Start MongoDB locally.

Run the application

```bash
npm run dev
```

Open your browser

```text
http://localhost:8000
```

---

##  Features Overview

### User Authentication

- Create a new account
- Secure login using JWT
- Logout functionality

### Blog Management

- Create new blogs
- Upload cover images
- View blog details
- Display author information

### Comments

- Add comments to blogs
- View all comments on a blog

---

##  Packages Used

- express
- mongoose
- ejs
- jsonwebtoken
- multer
- cookie-parser
- nodemon

---

##  Future Improvements

- Edit and Delete Blogs
- User Dashboard
- Search Blogs
- Categories & Tags
- Like and Bookmark Blogs
- Rich Text Editor
- Pagination
- Dark Mode
- Cloudinary Image Upload
- Deploy using MongoDB Atlas & Render

---

## Author

**Sania**

GitHub: https://github.com/Sania-Raza

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
