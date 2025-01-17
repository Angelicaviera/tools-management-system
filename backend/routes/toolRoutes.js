const express = require('express');
const router = express.Router();
const toolController = require('../controllers/toolController');

// GET all tools
router.get('/', toolController.getAllTools);

// CREATE new tool
router.post('/', toolController.createTool);

// UPDATE tool
router.put('/:id', toolController.updateTool);

// DELETE tool
router.delete('/:id', toolController.deleteTool);

module.exports = router;
