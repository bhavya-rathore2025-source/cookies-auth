
Cookie-Based Authentication System

This project demonstrates a secure authentication system using React and Express with HTTP-only cookies.
It focuses on backend correctness, authentication flow, and role-based access rather than UI complexity.

video demo: https://github.com/user-attachments/assets/ea495a05-e5a2-4b97-bc7e-ba2c316b1220
https://github.com/user-attachments/assets/12f630d1-3445-444c-90e0-18b85ee9b7a4


🚀 Features

User registration and login

Authentication using HTTP-only cookies and jwt

Protected dashboard route

Role-based UI (Admin / User)

Secure logout with cookie clearing

SQL Server for credential storage

🛠 Tech Stack

Frontend: React (Vite)

Backend: Node.js, Express

Database: SQL Server

HTTP Client: Axios

🔐 Authentication Flow

User logs in with credentials

Server validates user and sets an HTTP-only cookie

Browser automatically sends cookie on protected requests

Backend validates cookie before granting access

👤 Roles

User: Can access dashboard

Admin: Can access admin-only page
(Admin accounts are created manually, not via registration)


⚠️ Notes

UI is intentionally simple

Security and backend flow are the primary focus

Frontend role checks are for demo; backend remains the source of truth
