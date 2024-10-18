# Blog Platform

A full-stack blog platform where users can write posts, view others' posts, leave comments, and like comments. Built using Node.js, Express, MongoDB, and React, the platform allows for interactive user engagement and uses Firebase for authentication and image hosting.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Third-Party Services](#third-party-services)
- [Challenges](#challenges)
- [Next Steps](#next-steps)
- [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## Features
- Users can **create blog posts**, interact with others' posts, and leave **comments**.
- Ability to **like comments** and engage in discussions.
- **Google authentication** using Firebase for login.
- **Image hosting** via Firebase for uploading and displaying images.
- Fully **responsive design** for use across different devices.

## Technologies
Navigate to the project directory:

bash
Copy code
cd blog-platform
Install the necessary dependencies for both backend and frontend:

bash
Copy code
# Backend dependencies
npm install

# Frontend dependencies
cd client
npm install
Set up Firebase by following the instructions here and add your Firebase credentials to the project.

Create a .env file in the root directory and add the following environment variables:

bash
Copy code
MONGO_URI=your_mongo_db_uri
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
Start the development server:

bash
Copy code
# Start the backend
npm run dev

# Start the frontend
cd client
npm start
Usage
Navigate to http://localhost:3000 to access the platform.
Use the Google authentication button to log in and start creating posts.
Interact with posts by leaving comments and liking comments from other users.
Author
Ahmed Yousif - Backend Developer
This project is part of a personal portfolio to showcase full-stack development skills, from building the backend API with Node and MongoDB to handling frontend design with React and Tailwind.

### Backend
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database to store posts, comments, and user interactions.
- **Mongoose**: Object Data Modeling (ODM) for MongoDB.

### Frontend
- **React**: JavaScript library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

## Third-Party Services
- **Firebase Authentication**: Used for secure Google sign-in.
- **Firebase Storage**: Used for hosting and retrieving user-uploaded images.

## Challenges
- Making the application **responsive** to different screen sizes.
- Transitioning from a **backend-focused** developer to learning and implementing React for the frontend.
- Managing and integrating **third-party services** such as Firebase for authentication and image hosting.
- Improving **problem-solving** skills and software planning abilities throughout the project.

## Next Steps
- **Improvements**: Continue refining the platform's design and responsiveness.
- **Additional Features**: Implement more functionalities such as post categorization, search features, and notifications.
- Ongoing learning of modern web development tools to further enhance the platform.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AhmedYousif6/Blog.git
