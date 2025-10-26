const cors = require('cors');
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const authRoutes = require("./router/authRoutes");
const authMiddleware = require("./router/utils/authMiddleware");
const newsRoutes = require("./router/newsRoutes");
const uploadsRoutes = require("./router/uploadRoutes");
const categoriesRoutes = require("./router/categoriesRoutes");
const daysRoutes = require("./router/daysRoutes");
const jimpitRoutes = require("./router/jimpitRoutes");
const ressonRoutes = require("./router/ressonRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3180;

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "http://localhost:5173",
      "http://localhost:3180",
      "https://nomzerofour.vercel.app",
      "https://nomnomzerofour.vercel.app"
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

// Middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

// Routes
app.use("/nomfour", authRoutes);
app.use("/nomfour", authMiddleware, newsRoutes);
app.use("/nomfour", authMiddleware, uploadsRoutes);
app.use("/nomfour", authMiddleware, categoriesRoutes);
app.use("/nomfour", authMiddleware, daysRoutes);
app.use("/nomfour", authMiddleware, jimpitRoutes);
app.use("/nomfour", authMiddleware, ressonRoutes);

// Test route
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is running" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Endpoint not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  res.status(500).json({
    status: "error",
    message: process.env.NODE_ENV === "production" 
      ? "Internal server error" 
      : err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`✅ Server running`);
    console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
  });
}

module.exports = app;
