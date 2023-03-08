const router = require('express').Router();
const loaihoaController = require('../api/controllers/loaihoa.controller')

router.get('/', loaihoaController.getAll);

module.exports = router;