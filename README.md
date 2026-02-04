Cookie-Based Authentication System

This project demonstrates a secure authentication system using React and Express with HTTP-only cookies.
It focuses on backend correctness, authentication flow, and role-based access rather than UI complexity.

🚀 Features

User registration and login

Authentication using HTTP-only cookies

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
