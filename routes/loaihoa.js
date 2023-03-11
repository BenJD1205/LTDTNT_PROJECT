const router = require('express').Router();
const loaihoaController = require('../controllers/loaihoa.controller')

router.get('/', loaihoaController.getAll);

router.get('/:maloai', loaihoaController.getByLoai);

module.exports = router;