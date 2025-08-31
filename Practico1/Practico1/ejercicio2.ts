// Definimos una clase abstracta Figura
abstract class Figura {
    nombre:string

    constructor(nombre:string){
        this.nombre = nombre
    }
    // Método abstracto que cada figura deberá implementar
    abstract calcularArea(): number;
}

// Subclase: Cuadrado
class Cuadrado extends Figura {
    constructor(private base: number, private altura: number, nombre:string) {
        super(nombre);
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

// Subclase: Círculo
class Circulo extends Figura {
    constructor(private radio: number, nombre:string) {
        super(nombre);
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// Subclase: Triángulo
class Triangulo extends Figura {
    constructor(private base: number, private altura: number, nombre:string) {
        super(nombre);
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// Probamos las clases
const rectangulo = new Cuadrado(10, 5, "Rectangulo");
console.log("Área del rectángulo:", rectangulo.calcularArea());

const circulo = new Circulo(7, "Esfera");
console.log("Área del círculo:", circulo.calcularArea());

const triangulo = new Triangulo(8, 4, "Isoceles");
console.log("Área del triángulo:", triangulo.calcularArea());