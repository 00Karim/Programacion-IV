
// Ejercicio 5

// Definimos una interfaz llamada "Electrico"
interface Electrico {
    cargarBateria(): void;
}

// Definimos una clase abstracta llamada "Vehiculo"
abstract class Vehiculo {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Método abstracto: todas las clases hijas deben implementarlo
    abstract moverse(): void;
}

// Creamos la clase Auto que hereda de Vehiculo y además implementa Electrico
class Auto extends Vehiculo implements Electrico {
    moverse(): void {
        console.log("El auto avanza por la carretera.");
    }

    cargarBateria(): void {
        console.log("El auto eléctrico está cargando la batería.");
    }
}

// Creamos la clase Moto que hereda de Vehiculo
class Moto extends Vehiculo {
    moverse(): void {
        console.log("La moto se mueve entre los autos.");
    }
}

// Ejemplo de uso
const auto = new Auto("Tesla", "Model 3");
auto.moverse();
auto.cargarBateria();

const moto = new Moto("Honda", "CBR");
moto.moverse();
