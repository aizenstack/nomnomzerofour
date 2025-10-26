const cors = require("cors");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

const authRoutes = require("../router/authRoutes");
const authMiddleware = require("../router/utils/authMiddleware");
const newsRoutes = require("../router/newsRoutes");
const uploadsRoutes = require("../router/uploadRoutes");
const categoriesRoutes = require("../router/categoriesRoutes");
const daysRoutes = require("../router/daysRoutes");
const jimpitRoutes = require("../router/jimpitRoutes");
const ressonRoutes = require("../router/ressonRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3180;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3180",
    "https://nomzerofour.vercel.app",
    "https://nomnomzerofour.vercel.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV !== "production" && fs.existsSync(path.join(__dirname, "..", "uploads"))) {
  app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
}

app.use("/nomfour", authRoutes);
app.use("/nomfour", authMiddleware, newsRoutes);
app.use("/nomfour", authMiddleware, uploadsRoutes);
app.use("/nomfour", authMiddleware, categoriesRoutes);
app.use("/nomfour", authMiddleware, daysRoutes);
app.use("/nomfour", authMiddleware, jimpitRoutes);
app.use("/nomfour", authMiddleware, ressonRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    status: "error",
    message:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message
  });
});

module.exports = app;
