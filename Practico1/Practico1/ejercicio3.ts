
// Ejercicio 3: Herencia y Polimorfismo

abstract class Empleado {
    nombre: string;
    salarioBase: number;

    constructor(nombre: string, salarioBase: number) {
        this.nombre = nombre;
        this.salarioBase = salarioBase;
    }

    abstract calcularSalario(): number;
}

class EmpleadoTiempoCompleto extends Empleado {
    calcularSalario(): number {
        return this.salarioBase + 20000;
    }
}

class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.salarioBase * 0.5;
    }
}

// Ejemplo de uso
const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("Ana", 50000),
    new EmpleadoMedioTiempo("Luis", 40000)
];

empleados.forEach(emp => {
    console.log(`${emp.nombre} cobra: $${emp.calcularSalario()}`);
});
