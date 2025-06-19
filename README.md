# Secure Contacts Management API

![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

A secure, production-ready backend API designed for managing user-specific contact data, built with Node.js, Express.js, and MongoDB.

---

## Table of Contents

- [About The Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)

---

## About The Project

This project provides a robust and secure RESTful API for managing a user's personal contacts. It handles user registration, authentication, and all CRUD (Create, Read, Update, Delete) operations for contacts. Each user's data is isolated and protected, accessible only after successful authentication.

The architecture emphasizes security, scalability, and maintainability by using modern best practices, including stateless JWT authentication, password hashing, and a logical separation of concerns in the codebase.

---

## Features

-   **🔐 Secure User Authentication**: Stateless authentication using **JSON Web Tokens (JWTs)**. User passwords are never stored in plain text, thanks to strong hashing with **bcrypt.js**.
-   **📝 Full CRUD Functionality**: Complete set of endpoints for Creating, Reading, Updating, and Deleting contacts.
-   **🛡️ Protected Routes**: All contact-related endpoints are protected and require a valid JWT, ensuring that users can only access their own data.
-   **📄 Efficient Data Modeling**: Scalable and efficient MongoDB schema designed with **Mongoose**, featuring validation to ensure data integrity.
-   **🔧 Robust Error Handling**: Centralized and middleware-based error handling for consistent and predictable API responses.
-   **🏗️ Maintainable Codebase**: Logically structured application following the MVC (Model-View-Controller) pattern, with clear separation for routes, controllers, models, and middleware.

---

## Tech Stack

| Category | Technology |
| :--- | :--- |
| **Backend** | ![Node.js](https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge) |
| **Authentication** | ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Bcrypt](https://img.shields.io/badge/Bcrypt-6242F5?style=for-the-badge) |