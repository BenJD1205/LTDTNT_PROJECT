const router = require('express').Router();
const hoaController = require('../controllers/hoa.controller');

router.get('/', hoaController.getAll);

router.get("/:mahoa", hoaController.getByMa);

router.get("/tenhoa/:tenhoa", hoaController.getByName);

module.exports = router;