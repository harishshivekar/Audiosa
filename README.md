# 🎵 Audiosa - Backend

Audiosa is a music streaming web application. This repository contains the backend server built using **Node.js**, **Express.js**, and **MongoDB**. It provides APIs to manage music tracks, artists, and more.

## 🚀 Features

- RESTful APIs for managing tracks
- MongoDB integration with Mongoose
- Organized file structure (MVC pattern)
- CORS enabled for frontend connection

---

## 📁 Folder Structure

audiosa-backend/
├── controllers/
│   └── trackController.js       # Handles business logic for tracks
│
├── models/
│   └── Track.js                 # Mongoose schema for tracks
│
├── routes/
│   └── trackRoutes.js           # API routes for music tracks
│
├── config/
│   └── db.js                    # MongoDB connection setup
│
├── .env                         # Environment variables (not committed)
├── .gitignore                   # Files/folders to ignore in Git
├── package.json                 # Project metadata and dependencies
├── server.js                    # Entry point of the backend server
└── README.md                    # Project documentation

# Install Dependencies
npm install

# Set Up Environment Variables
Create a .env file in the root directory:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/audiosa


# API Endpoints

Method	   Endpoint	      Description
GET	     /api/tracks     	Fetch all tracks
POST	   /api/tracks	    Add a new track

#Sample POST JSON
{
  "title": "Chill Vibes",
  "artist": "Audiosa Beats",
  "url": "https://example.com/audio.mp3",
  "cover": "https://example.com/cover.jpg"
}

#Dependencies
*Express
*Mongoose
*dotenv
*CORS

#Future Enhancements
*🔐 JWT-based user authentication
*📁 Audio file uploads with Multer
*📝 User playlists and favorites
*📊 Admin dashboard

