const router = require('express').Router();
const hoaController = require('../controllers/hoa.controller');

router.get('/', hoaController.getAll);

router.get("/:maloai", hoaController.getByMaLoai);

router.get("/mahoa/:id",hoaController.getById) 

router.get("/tenhoa/:tenhoa", hoaController.getByName);

module.exports = router;