// Definimos una clase abstracta Figura
abstract class Figura {
    // Método abstracto que cada figura deberá implementar
    abstract calcularArea(): number;
}

// Subclase: Rectángulo
class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return this.base * this.altura;
    }
}

// Subclase: Círculo
class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

// Subclase: Triángulo
class Triangulo extends Figura {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
}

// 🔹 Probamos las clases
const rectangulo = new Rectangulo(10, 5);
console.log("Área del rectángulo:", rectangulo.calcularArea());

const circulo = new Circulo(7);
console.log("Área del círculo:", circulo.calcularArea());

const triangulo = new Triangulo(8, 4);
console.log("Área del triángulo:", triangulo.calcularArea());