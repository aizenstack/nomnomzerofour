const express = require('express');
const cors = require('cors')
const path = require("path");
const dotenv = require('dotenv')
const authRoutes = require('../router/authRoutes')
const authMiddleware = require('../router/utils/authMiddleware')
const newsRoutes = require('../router/newsRoutes');
const uploadsRoutes = require('../router/uploadRoutes');
const categoriesRoutes = require('../router/categoriesRoutes');
const daysRoutes = require('../router/daysRoutes');
const jimpitRoutes = require('../router/jimpitRoutes')
const ressonRoutes = require('../router/ressonRoutes')


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('')
})
app.use((req, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});
app.use((err, req, res, next) => {
//   console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

app.use('/nomfour',authRoutes);
app.use('/nomfour',newsRoutes);
app.use('/nomfour',uploadsRoutes);
app.use('/nomfour',categoriesRoutes);
app.use('/nomfour',daysRoutes);
app.use('/nomfour',jimpitRoutes);
app.use('/nomfour',ressonRoutes);


app.listen(PORT, () => {
    console.log('server is running');
})