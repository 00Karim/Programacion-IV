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
// Definimos una clase abstracta Figura
var Figura = /** @class */ (function () {
    function Figura() {
    }
    return Figura;
}());
// Subclase: Rectángulo
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}(Figura));
// Subclase: Círculo
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        return Math.PI * this.radio * this.radio;
    };
    return Circulo;
}(Figura));
// Subclase: Triángulo
var Triangulo = /** @class */ (function (_super) {
    __extends(Triangulo, _super);
    function Triangulo(base, altura) {
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Triangulo.prototype.calcularArea = function () {
        return (this.base * this.altura) / 2;
    };
    return Triangulo;
}(Figura));
// 🔹 Probamos las clases
var rectangulo = new Rectangulo(10, 5);
console.log("Área del rectángulo:", rectangulo.calcularArea());
var circulo = new Circulo(7);
console.log("Área del círculo:", circulo.calcularArea());
var triangulo = new Triangulo(8, 4);
console.log("Área del triángulo:", triangulo.calcularArea());
