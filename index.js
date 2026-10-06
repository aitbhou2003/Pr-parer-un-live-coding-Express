require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());


const authRoutes = require("./src/routes/auth.router");
const productRoutes = require("./src/routes/product.router");

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT;


// Connect to MongoDB Docker instance
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Successfully connected to MongoDB in Docker!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Basic Test Route
app.get("/", (req, res) => {
  res.send("Express & MongoDB Docker Setup Working!");
});

app.listen(PORT, () => {
  console.log(`Server is running locally on http://localhost:${PORT}`);
});
