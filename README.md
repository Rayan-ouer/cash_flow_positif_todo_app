# Task Manager Project

## Requirements
- Node.js v22.17.0  
- Docker v27.5.1  
- Docker Compose v1.29.2  

---

## Production
To run both Backend and Frontend in production mode using Docker Compose, run the following command:
```
docker-compose up --build
```
The app will be accessible at http://localhost.

---

## Backend
To run the backend manually run this command:
```
docker build . -t backend 
docker run -p 5000:5000 backend
```
The backend server will be accessible at http://localhost:5000 or as configured in the .env file.

---

## Frontend
To run the frontend manually run this command:
docker build . -t frontend   
docker run -p 80:80 frontend
The frontend will be accessible at http://localhost.

## Stack Backend
Typescript
Express
Zod

## Stack Frontend
Typescript
TanStack Query
React Hook Form
Zod
Tailwind CSS