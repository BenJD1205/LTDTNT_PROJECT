const express = require('express');
const router = express.Router();
const loaihoaRouter = require('./loaihoa');
const hoaRouter = require('./hoa');
const userRouter = require('./user');
const authRouter = require('./auth');

router.use("/auth",authRouter)
router.use('/loaihoa', loaihoaRouter);
router.use('/hoa', hoaRouter);
router.use('/nguoidung', userRouter);

module.exports = router;