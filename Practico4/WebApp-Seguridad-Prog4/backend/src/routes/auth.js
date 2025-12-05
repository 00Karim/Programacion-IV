const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

const loginLimiter = require('../middleware/rateLimit')

// Rutas de autenticación
router.post('/login', loginLimiter, authController.login); // implementamos el loginLimiter para login, solo podes hacer 5 intentos cada 15 minutos
router.post('/register', authController.register);
router.post('/auth/verify', authController.verifyToken);
router.post('/check-username', authController.checkUsername);

module.exports = router;
