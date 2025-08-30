// Ejercicio 5: Diseño de UML propio
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Clase abstracta Vehiculo
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    return Vehiculo;
}());
// Clase Auto
var Auto = /** @class */ (function (_super) {
    __extends(Auto, _super);
    function Auto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Auto.prototype.moverse = function () {
        console.log("El auto avanza por la carretera.");
    };
    Auto.prototype.cargarBateria = function () {
        console.log("El auto eléctrico está cargando la batería.");
    };
    return Auto;
}(Vehiculo));
// Clase Moto
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moto.prototype.moverse = function () {
        console.log("La moto se mueve entre los autos.");
    };
    return Moto;
}(Vehiculo));
// Ejemplo de uso
var auto = new Auto("Tesla", "Model 3");
auto.moverse();
auto.cargarBateria();
var moto = new Moto("Honda", "CBR");
moto.moverse();
