# MoviesLand - Movie Management System

## Project Details
- **Authors**: Abhishek Masur Jayatheertha,Ashton Phillips,Harry Joseph,Ilia Mchedlishvilint Project
- **Course**: CPAN-212-Group Project-Modern Web Development full stackt
- **Created**: December  06 2025
- **Platform**: Node.js + Express + MongoDB Atlas
- **Template Engine**: EJS (Embedded JavaScript)
- **Database**: MongoDB Atlas (Cloud)
- **Authentication**: Session-based with bcrypt

## Overview
MoviesLand is a comprehensive movie management web application built with Express.js and MongoDB. The project demonstrates full-stack development with user authentication, CRUD operations, access control, and cloud database integration. Features include user registration/login, movie creation/editing with validation, and role-based access restrictions.

## Quick Access
**Live Application:**
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)](https://moviesland-app-74ea9299f6f8.herokuapp.com/)

** Quick DOWNLOAD OF Source Code (Release v1):**
[![Download MoviesLand.zip — v1](https://img.shields.io/badge/Download-MoviesLand.zip-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hjoseph777/MoviesLand/releases/download/v1/MoviesLand.zip)

*Complete Express.js application with MongoDB integration ready to run*


### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Git


3. **Configure Database**
   - Update `config/keys.js` with your MongoDB Atlas connection string
   - Or set `DB_URL` environment variable

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   - Local: http://localhost:3000/
   - Production: https://moviesland-app-74ea9299f6f8.herokuapp.com/

## Project Explorer
An interactive view of the application structure with key functionality.

<details open>
   <summary><strong>🗂️ Core Application Files</strong></summary>

   - 📁 **Root**
      - 📄 [`App.js`](App.js) – **Main server setup, MongoDB connection, middleware**
      - 📄 [`package.json`](package.json) – Dependencies and npm scripts
      - 📄 [`Procfile`](Procfile) – Heroku deployment configuration
</details>

<details>
   <summary><strong>⚙️ Configuration</strong></summary>

   - 📁 **config/**
      - 🔑 [`keys.js`](config/keys.js) – **MongoDB Atlas connection strings**
</details>

<details>
   <summary><strong>🗄️ Database Models</strong></summary>

   - 📁 **models/**
      - 🎬 [`movie.js`](models/movie.js) – **Movie schema (name, description, year, genres, rating, director)**
      - 👤 [`User.js`](models/User.js) – **User schema with authentication fields**
</details>

<details>
   <summary><strong>🛣️ Routes & Controllers</strong></summary>

   - 📁 **routes/**
      - 🎬 [`movies.js`](routes/movies.js) – **Movie CRUD operations, access control**
      - 🔐 [`auth.js`](routes/auth.js) – **User registration, login, logout with validation**
</details>

<details>
   <summary><strong>🎨 Views & Templates</strong></summary>

   - 📁 **views/**
      - 📝 [`new-movie.ejs`](views/new-movie.ejs) – **Movie creation form with validation**
      - ✏️ [`edit-movie.ejs`](views/edit-movie.ejs) – **Movie editing form**
      - 👁️ [`movie-details.ejs`](views/movie-details.ejs) – **Movie display page**
      - 📋 [`register.ejs`](views/register.ejs) – **User registration form**
      - 🔑 [`login.ejs`](views/login.ejs) – **User login form**
</details>

## File Structure

```text
MoviesLand/
├── 📁 config/                       # Configuration files
│   └── 🔑 keys.js                   # MongoDB connection string
│
├── 📁 models/                       # Mongoose schemas
│   ├── 🎬 movie.js                  # Movie model (name, description, year, genres, rating, director, owner)
│   └── 👤 User.js                   # User model (username, email, password)
│
├── 📁 routes/                       # Express routes
│   ├── 🎬 movies.js                 # Movie CRUD + access control middleware
│   └── 🔐 auth.js                   # Authentication routes with validation
│
├── 📁 views/                        # EJS templates
│   ├── 📝 new-movie.ejs             # Create movie form
│   ├── ✏️ edit-movie.ejs            # Edit movie form  
│   ├── 👁️ movie-details.ejs         # Movie details display
│   ├── 📋 register.ejs              # User registration form
│   └── 🔑 login.ejs                 # User login form
│
├── 🚀 App.js                        # Main server file
├── 📦 package.json                  # Dependencies & scripts
├── 🌐 Procfile                      # Heroku deployment config
└── 📝 README.md                     # Documentation
```

### Key Features Reference
| Feature | Route | File | Purpose |
|---------|-------|------|---------|
| Home | `/` | [`App.js`](App.js) | Home redirect to movies |
| Create | `/movies/new` | [`routes/movies.js`](routes/movies.js) | Create movie (login required) |
| View | `/movies/:id` | [`routes/movies.js`](routes/movies.js) | View movie details |
| Edit | `/movies/:id/edit` | [`routes/movies.js`](routes/movies.js) | Edit movie (owner only) |
| Delete | `/movies/:id/delete` | [`routes/movies.js`](routes/movies.js) | Delete movie (owner only) |
| Register | `/auth/register` | [`routes/auth.js`](routes/auth.js) | User registration with validation |
| Login | `/auth/login` | [`routes/auth.js`](routes/auth.js) | User login with session |
| Logout | `/auth/logout` | [`routes/auth.js`](routes/auth.js) | User logout |

## Features

### **Core Requirements Met**
- **Express + EJS**: Complete web application with templating
- **MongoDB Integration**: Cloud database with Mongoose ODM
- **Movie Management**: Full CRUD operations with validation
- **User Authentication**: Registration, login, logout with bcrypt
- **Access Control**: Route restrictions and ownership validation
- **Error Handling**: Comprehensive form validation and error display
- **Cloud Deployment**: Heroku-ready with environment configuration

### **Security Features**
- Password hashing with bcryptjs
- Session-based authentication
- Route protection middleware
- Owner-based access control for edit/delete operations
- Input validation and sanitization

### **Database Schema**
**Movie Model:**
- `name` (String, required)
- `description` (String)
- `year` (Number, required, validated range)
- `genres` (Array of Strings)
- `rating` (Number, 0-10)
- `director` (String, required) - *Custom field*
- `owner` (ObjectId, ref: User)

**User Model:**
- `username` (String, required, unique)
- `email` (String, required, unique)
- `password` (String, required, hashed)

## Deployment

**Production URL**: https://moviesland-app-74ea9299f6f8.herokuapp.com/

**Environment Variables:**
- `DB_URL`: MongoDB Atlas connection string
- `PORT`: Application port (auto-configured by Heroku)

**Deployment Commands:**
```bash
# Deploy to Heroku
git push heroku main

# View logs
heroku logs --tail --app moviesland-app
```
---

*This project demonstrates full-stack web development with Node.js, Express, MongoDB, and modern authentication patterns.*
