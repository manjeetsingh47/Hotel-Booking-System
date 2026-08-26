# Hotel Booking Management System

A full-stack Hotel Booking Management System developed using the MERN stack as a college final year project.

The system allows users to search for hotels, view hotel details, register and login, make hotel bookings, and manage their bookings. Hotel owners and administrators can manage hotels and bookings through the system.

## Features

### User Features

- User Registration
- User Login
- Secure Authentication
- Search Hotels
- View Hotel Details
- Filter Hotels
- Book Hotels
- View My Bookings
- Cancel Bookings
- Write Hotel Reviews

### Hotel Owner Features

- Add New Hotels
- Edit Hotel Details
- Upload Hotel Images
- View Listed Hotels
- View Hotel Bookings
- Manage Hotel Information

### Admin Features

- Admin Dashboard
- Manage Users
- Manage Hotels
- Manage Bookings
- Manage Reviews
- View System Statistics

## Technologies Used

### Frontend

- React.js
- TypeScript
- Vite
- Tailwind CSS
- Axios
- React Router
- React Query

### Backend

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

### Other Technologies

- Cloudinary for hotel image storage
- Stripe for test payment processing

## Project Structure

```text
Hotel-Booking-System/
│
├── hotel-booking-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.ts
│
├── hotel-booking-backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── index.ts
│   ├── package.json
│   └── tsconfig.json
│
├── shared/
│
├── data/
│
├── README.md
└── .gitignore