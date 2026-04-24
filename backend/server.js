const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const memberRoutes = require("./routes/memberRoutes");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (_req, res) => {
  res.json({ message: "Server is running" });
});

app.use("/api/members", memberRoutes);
app.use("/members", memberRoutes);

app.use((err, _req, res, _next) => {
  if (err.message === "Only image files are allowed.") {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({
    message: "Unexpected server error.",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

