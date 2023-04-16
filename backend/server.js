const path = require("path");
require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

// const __dirname = path.resolve();
app.use("/api/products", productRoutes);
app.use(express.static(path.join(__dirname, "/build")));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
