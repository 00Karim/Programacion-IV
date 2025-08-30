
// Ejercicio 1: Interfaces

interface Animal {
    // Método que deben implementar los animales para hacer un sonido
    hacerSonido(): void;
    // Método que deben implementar los animales para moverse
    moverse(): void;
}

// Creamos una clase llamada "Perro" que implementa (usa) la interfaz "Animal"
class Perro implements Animal {
    // Implementamos el método "hacerSonido" de la interfaz
    hacerSonido(): void {
        console.log("Guau!"); // Creamos una clase llamada "Perro" que implementa (usa) la interfaz "Animal"
    }
    // Implementamos el método "moverse" de la interfaz
    moverse(): void {
        console.log("El perro corre");
    }
}

// Ejemplo de uso
const perro = new Perro();
perro.hacerSonido();
perro.moverse();
