const router = require('express').Router();
const loaihoaController = require('../controllers/loaihoa.controller')

router.get('/', loaihoaController.getAll);

module.exports = router;