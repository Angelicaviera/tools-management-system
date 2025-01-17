const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  borrowed: {
    type: Number,
    default: 0,
  },
  available: {
    type: Number,
    default: 0,
  },
  // misalnya kita ingin menyimpan URL atau nama file gambar:
  picture: {
    type: String,
    default: '',
  },
}, { timestamps: true });

module.exports = mongoose.model('Tool', ToolSchema);
