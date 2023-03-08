const express = require('express');
const router = express.Router();
const loaihoaRouter = require('./loaihoa');
const hoaRouter = require('./hoa');

router.use('/loaihoa', loaihoaRouter);
router.use('/hoa', hoaRouter);

module.exports = router;