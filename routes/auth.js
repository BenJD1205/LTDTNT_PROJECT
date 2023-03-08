const router = require('express').Router();
const authController = require('../api/controllers/auth');

//signup
router.post("/signup",authController.signUp);

//signin
router.post('/signin', authController.signIn);

module.exports = router;