const Tool = require('../models/Tool');

// GET all tools
exports.getAllTools = async (req, res) => {
  try {
    const tools = await Tool.find({});
    res.json(tools);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE new tool
exports.createTool = async (req, res) => {
  try {
    const { name, qty, picture } = req.body;
    const newTool = new Tool({
      name,
      qty,
      borrowed: 0,
      available: qty,  // awalnya semua tersedia
      picture
    });
    const savedTool = await newTool.save();
    res.json(savedTool);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE tool
exports.updateTool = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, qty, borrowed, picture } = req.body;

    // jika needed, hitung available: qty - borrowed
    const available = qty - borrowed;

    const updated = await Tool.findByIdAndUpdate(
      id,
      { name, qty, borrowed, available, picture },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE tool
exports.deleteTool = async (req, res) => {
  try {
    const { id } = req.params;
    await Tool.findByIdAndDelete(id);
    res.json({ message: 'Tool deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
