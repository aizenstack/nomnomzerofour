const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require("../router/authRoutes");
const categoriesRoutes = require("../router/categoriesRoutes");
const dashboardRoutes = require("../router/dashboardRoutes");
const daysRoutes = require("../router/daysRoutes");
const feedbackRoutes = require("../router/feedbackRoutes");
const jimpitRoutes = require("../router/jimpitRoutes");
const newsRoutes = require("../router/newsRoutes");
const ressonRoutes = require("../router/ressonRoutes");
const uploadRoutes = require("../router/uploadRoutes");
const notedRoutes = require('../router/notedRoutes')

const { authMiddleware } = require("../router/utils/authMiddleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3180;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3180",
    "https://nomzerofour.vercel.app",
    "https://nomnomzerofour.vercel.app",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/nomfour", authRoutes);

app.use("/nomfour", categoriesRoutes);
app.use("/nomfour", dashboardRoutes);
app.use("/nomfour", daysRoutes);
app.use("/nomfour", feedbackRoutes);
app.use("/nomfour", jimpitRoutes);
app.use("/nomfour", newsRoutes);
app.use("/nomfour", ressonRoutes);
app.use("/nomfour", uploadRoutes);
app.use("/nomfour", notedRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({
    status: "error",
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

module.exports = app;
