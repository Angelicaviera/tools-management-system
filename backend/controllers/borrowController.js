const Borrow = require('../models/Borrow');
const Tool = require('../models/Tool');

// GET all borrowed data
exports.getAllBorrows = async (req, res) => {
  try {
    const borrows = await Borrow.find({});
    res.json(borrows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new borrow record
exports.createBorrow = async (req, res) => {
  try {
    const { toolName, qty, studentName, studentEmail } = req.body;

    // Buat data borrow
    const newBorrow = new Borrow({
      toolName,
      qty,
      studentName,
      studentEmail,
      status: 'Borrowed'
    });
    const savedBorrow = await newBorrow.save();

    // Update data tool (kurangi available, tambah borrowed)
    const tool = await Tool.findOne({ name: toolName });
    if (tool) {
      tool.borrowed += qty;
      tool.available = tool.qty - tool.borrowed;
      await tool.save();
    }

    res.json(savedBorrow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// COMPLETE borrow (ubah status, kembalikan stok dsb)
exports.completeBorrow = async (req, res) => {
  try {
    const { id } = req.params;

    // Temukan record borrow
    const borrowRecord = await Borrow.findById(id);
    if (!borrowRecord) {
      return res.status(404).json({ error: 'Borrow record not found' });
    }

    // Update status jadi Completed
    borrowRecord.status = 'Completed';
    await borrowRecord.save();

    // Kembalikan stok ke Tools
    const tool = await Tool.findOne({ name: borrowRecord.toolName });
    if (tool) {
      tool.borrowed -= borrowRecord.qty;
      tool.available = tool.qty - tool.borrowed;
      await tool.save();
    }

    res.json(borrowRecord);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
