// Ejercicio 3: Herencia y Polimorfismo
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
var Empleado = /** @class */ (function () {
    function Empleado(nombre, salarioBase) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }
    return Empleado;
}());
var EmpleadoTiempoCompleto = /** @class */ (function (_super) {
    __extends(EmpleadoTiempoCompleto, _super);
    function EmpleadoTiempoCompleto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmpleadoTiempoCompleto.prototype.calcularSalario = function () {
        return this.salarioBase + 20000;
    };
    return EmpleadoTiempoCompleto;
}(Empleado));
var EmpleadoMedioTiempo = /** @class */ (function (_super) {
    __extends(EmpleadoMedioTiempo, _super);
    function EmpleadoMedioTiempo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmpleadoMedioTiempo.prototype.calcularSalario = function () {
        return this.salarioBase * 0.5;
    };
    return EmpleadoMedioTiempo;
}(Empleado));
// Ejemplo de uso
var empleados = [
    new EmpleadoTiempoCompleto("Ana", 50000),
    new EmpleadoMedioTiempo("Luis", 40000)
];
empleados.forEach(function (emp) {
    console.log("".concat(emp.nombre, " cobra: $").concat(emp.calcularSalario()));
});
