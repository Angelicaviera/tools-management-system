const express = require('express');
const router = express.Router();
const borrowController = require('../controllers/borrowController');

// GET all borrowed
router.get('/', borrowController.getAllBorrows);

// CREATE new borrow
router.post('/', borrowController.createBorrow);

// COMPLETE borrow
router.put('/complete/:id', borrowController.completeBorrow);

module.exports = router;
