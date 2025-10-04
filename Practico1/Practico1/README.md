# Práctico 1.

## Integrantes
Baudrix Fernandez, Franco
Pellegrini, Jesica Johanna
Ruppel, Federico
Velez Ali, Karim

## Ejercicio 3 – Herencia y Polimorfismo (UML)

classDiagram
    class Empleado {
        - nombre: string
        - salarioBase: number
        + constructor(nombre, salarioBase)
        + calcularSalario(): number
    }

    class EmpleadoTiempoCompleto {
        + calcularSalario(): number
    }

    class EmpleadoMedioTiempo {
        + calcularSalario(): number
    }

    Empleado <|-- EmpleadoTiempoCompleto
    Empleado <|-- EmpleadoMedioTiempo

## Ejercicio 4

* Todos los animales tienen nombre y hacen un sonido (aunque cada uno define el propio)
* Los pajaros, ademas de hacer sonido, implementan la interfaz Volador, por lo tanto vuelan
* Los zorros en cambio no vuelan, pero heredan la clase Animal

## Ejercicio 5

classDiagram
    class Vehiculo {
        - marca: string
        - modelo: string
        + arrancar(): void
    }

    class Auto {
        + arrancar(): void
        + cargarBateria(): void
    }

    class Moto {
        + arrancar(): void
    }

    class Electrico {
        + cargarBateria(): void
    }

    Vehiculo <|-- Auto
    Vehiculo <|-- Moto
    Electrico <|.. Auto







