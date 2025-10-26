const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
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
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://nomzerofour.vercel.app",
  ],
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

app.options("*", cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.json());

app.use("/nomfour", authRoutes);
app.use("/nomfour", authMiddleware, newsRoutes);
app.use("/nomfour", authMiddleware, uploadsRoutes);
app.use("/nomfour", authMiddleware, categoriesRoutes);
app.use("/nomfour", authMiddleware, daysRoutes);
app.use("/nomfour", authMiddleware, jimpitRoutes);
app.use("/nomfour", authMiddleware, ressonRoutes);

app.get("/", (req, res) => {
  console.log("Server is running");
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

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running`);
    console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  });
}

module.exports = app;
