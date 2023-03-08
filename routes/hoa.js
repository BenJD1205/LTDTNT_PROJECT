const router = require('express').Router();
const hoaController = require('../controllers/hoa.controller');

router.get('/', hoaController.getAll);

module.exports = router;