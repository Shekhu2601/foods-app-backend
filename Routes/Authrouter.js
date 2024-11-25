const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middilewere/AuthValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;