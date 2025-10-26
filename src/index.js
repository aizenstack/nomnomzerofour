const express = require("express");
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
const PORT = process.env.PORT || 3180;

const cors = require('cors');

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3180",
  "https://nomzerofour.vercel.app",
  "https://nomnomzerofour.vercel.app"
];

// Konfigurasi CORS
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Gunakan CORS middleware
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

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
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  });
}

module.exports = app;
