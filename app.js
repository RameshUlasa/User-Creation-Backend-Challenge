const express = require("express");
const sequelize = require("./db/sqlite");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Use the User routes
app.use("/api", userRoutes);

// Sync the database models and start the server
sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables created!");

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
