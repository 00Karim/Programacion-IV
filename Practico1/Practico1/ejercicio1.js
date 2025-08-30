// Ejercicio 1: Interfaces
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.hacerSonido = function () {
        console.log("Guau!");
    };
    Perro.prototype.moverse = function () {
        console.log("El perro corre");
    };
    return Perro;
}());
// Ejemplo de uso
var perro = new Perro();
perro.hacerSonido();
perro.moverse();
