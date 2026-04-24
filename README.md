# Student Team Members Management Application

A full stack web application for managing student team members. This project includes a React frontend and a Node.js, Express, and MongoDB backend with image upload support.

## Features

- Home page with team introduction and navigation
- Add member form with profile image upload
- View all team members in a responsive card layout
- View individual member details
- MongoDB data persistence
- Express static file serving for uploaded images

## Project Structure

```text
student-team-members-management/
|-- backend/
|   |-- config/
|   |-- models/
|   |-- routes/
|   |-- uploads/
|   |-- .env.example
|   |-- package.json
|   `-- server.js
|-- frontend/
|   |-- src/
|   |-- index.html
|   |-- package.json
|   `-- vite.config.js
|-- .gitignore
`-- README.md
```

## Installation

### 1. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder based on `.env.example`.

Example:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/team_members_db
CLIENT_URL=http://localhost:5173
```

### 2. Frontend setup

```bash
cd frontend
npm install
```

## How To Run

### Start backend

```bash
cd backend
npm run dev
```

### Start frontend

```bash
cd frontend
npm run dev
```

Open the frontend in your browser at the URL shown by Vite, usually `http://localhost:5173`.

## API Endpoints

- `GET /api/health` - Server health check
- `POST /api/members` - Add a new member with image upload
- `GET /api/members` - Fetch all members
- `GET /api/members/:id` - Fetch one member by id

The same member routes are also exposed under:

- `POST /members`
- `GET /members`
- `GET /members/:id`

## Tech Stack

- React.js
- React Router
- Axios
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer

## Submission Notes

- BHAVYA GAUR (RA2311027010087)

