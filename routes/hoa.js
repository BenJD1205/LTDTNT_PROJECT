const router = require('express').Router();
const hoaController = require('../api/controllers/hoa.controller');

router.get('/', hoaController.getAll);

module.exports = router;