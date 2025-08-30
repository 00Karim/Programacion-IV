
// Ejercicio 4
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Estudiante extends Persona {
    legajo: number;

    constructor(nombre: string, edad: number, legajo: number) {
        super(nombre, edad);
        this.legajo = legajo;
    }
}
