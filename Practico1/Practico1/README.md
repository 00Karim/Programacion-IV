# Práctico 1.

## Integrantes


## Ejercicio 3 – Herencia y Polimorfismo (UML)

classDiagram
    class Empleado {
        - nombre: string
        - salarioBase: number
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

classDiagram
    class Persona {
        - nombre: string
        - edad: number
        + presentarse(): void
    }

    class Estudiante {
        - carrera: string
        + estudiar(): void
    }

    class Profesor {
        - materia: string
        + enseñar(): void
    }

    Persona <|-- Estudiante
    Persona <|-- Profesor

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







