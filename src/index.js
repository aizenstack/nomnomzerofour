const express = require('express');
const cors = require('cors');
const path = require("path");
const dotenv = require('dotenv');
const authRoutes = require('../router/authRoutes');
const authMiddleware = require('../router/utils/authMiddleware');
const newsRoutes = require('../router/newsRoutes');
const uploadsRoutes = require('../router/uploadRoutes');
const categoriesRoutes = require('../router/categoriesRoutes');
const daysRoutes = require('../router/daysRoutes');
const jimpitRoutes = require('../router/jimpitRoutes');
const ressonRoutes = require('../router/ressonRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
app.use(express.json());

// Routes
app.use('/nomfour', authRoutes);
app.use('/nomfour', newsRoutes);
app.use('/nomfour', uploadsRoutes);
app.use('/nomfour', categoriesRoutes);
app.use('/nomfour', daysRoutes);
app.use('/nomfour', jimpitRoutes);
app.use('/nomfour', ressonRoutes);

// Health check endpoint
app.get('/', (req, res) => {
  console.log('Server is running');
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    status: 'error', 
    message: process.env.NODE_ENV === 'production' 
      ? 'Internal server error' 
      : err.message 
  });
});

// Start server if not in a serverless environment
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  });
}

module.exports = app;
