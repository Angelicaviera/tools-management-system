require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ambil PORT dan MONGODB_URI dari environment
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Koneksi ke MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

// Import routes
const toolRoutes = require('./routes/toolRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

// Gunakan routes
app.use('/api/tools', toolRoutes);
app.use('/api/borrow', borrowRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
