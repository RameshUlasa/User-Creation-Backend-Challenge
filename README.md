# Smoke Trees Backend-Challenge
This is a simple backend application built using **JavaScript**, **Express.js**, **Node.js** and **SQLite**. It allows users to register and store their addresses. The application includes two tables: **Users** and **Addresses**, with a one-to-many relationship between them.

### Prerequisites
- Node.js installed (version 18.x or above)
- SQLite installed or integrated as part of the project
- Git (optional for cloning the repository)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/RRR-Backend-Challenge.git
```
### 2. Navigate to the Project Directory

```bash
cd SmokeTrees Task
```
### 3. Install Dependencies
```bash
npm install
```
### 4. Run the Application
- You can run the application locally using:
```bash
node app.js
```
- By default, the application will be accessible on http://localhost:3000

### 5. Test the API
- You can test the API using a tool like Postman or via an .http file.
- Example request:
```bash
POST http://localhost:3000/api/register
Content-Type: application/json

{
  "name": "Ramesh U",
  "address": "123 Hyderabad, Telangana, India"
}
```
### 6. Database
- The application uses SQLite as the database. The SQLite database is automatically created when the application starts.

### 7. Project Structure
```bash
├── controllers/
│   └── userController.js
├── models/
│   ├── address.js
│   └── user.js
├── routes/
│   └── userRoutes.js
├── db/
│   └── sqlite.js
├── app.js
├── package.json
├── README.md
```
### 8. API Endpoints
- POST /api/register: Register a user and store their address.
- Example API Response
```bash
{
  "message": "User and address created successfully!",
  "user": {
    "id": 1,
    "name": "Ramesh U",
    "createdAt": "2024-09-29T16:01:24.595Z",
    "updatedAt": "2024-09-29T16:01:24.595Z"
  },
  "address": {
    "id": 1,
    "address": "123 Hyderabad, Telangana, India",
    "userId": 1,
    "createdAt": "2024-09-29T16:01:24.627Z",
    "updatedAt": "2024-09-29T16:01:24.627Z"
  }
}
```






