# Company-Assignment

# Zappio Backend — Mini Ride Booking Backend (MVP)

---

## 📘 Project Overview

Zappio is a zero-commission, driver-first bike taxi platform. This project is a mini backend service built as an MVP for the core workflows:

- OTP-based user login (send and verify OTP)
- Accepting ride requests with pickup and drop locations
- Storing ride requests in Firestore
- Securing the ride request API using JWT token authentication

---

## 🚀 Features

1. **/send-otp**  
   - Accepts a phone number  
   - Generates a random 4-digit OTP  
   - Stores OTP in-memory  
   - Returns success (no real SMS sending)

2. **/verify-otp**  
   - Accepts phone number + OTP  
   - Verifies OTP correctness  
   - Returns a mock userId and a signed JWT token for authentication

3. **/ride-request**  
   - Accepts userId, pickup & drop coordinates, and timestamp  
   - Creates a new ride request in Firestore with status: "requested"  
   - Protected route requiring valid JWT token in Authorization header

---

## 📦 Tech Stack

- Node.js with Express
- Firebase Firestore for data storage
- JSON Web Token (JWT) for simple token authentication
- dotenv for environment variable management

---

## ⚙️ How to Run Locally

1. Clone the repository

```bash
git clone Company-Assignment
cd zappio-backend
