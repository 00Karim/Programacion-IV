const rateLimit = require("express-rate-limit")

// windowMs define el periodo 
// max define la cantidad de veces que se puede usar esa ruta en el periodo determinado
// message es el error que se muestra si se excede ese limite
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,  // 15 minutos
    max: 9,                     // 10 intentos
    message: 'Demasiados intentos. Intente más tarde.'
})

module.exports = loginLimiter