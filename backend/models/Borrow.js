const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
  borrowDate: {
    type: Date,
    default: Date.now,
  },
  toolName: {
    type: String,     // atau kita bisa simpan ObjectId tool
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Borrowed', 'Completed'],
    default: 'Borrowed',
  },
}, { timestamps: true });

module.exports = mongoose.model('Borrow', BorrowSchema);
