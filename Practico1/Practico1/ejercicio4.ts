//Ejercicio 4: UML

//Definimos una clase abstracta Animal
abstract class Animal {
    protected nombre:string;

    constructor(nombre:string){
        this.nombre = nombre
    }
    //Metodo que debe implementar un animal para reproducir sonido
    abstract hacerSonido():void
}

//Definimos la interfaz para animales voladores
interface Volador {
    volar():void
}

//Definimos la subclase Pajaro
class Pajaro extends Animal implements Volador{
    private especie:string

    constructor(nombre:string, especie:string){
        super(nombre)
        this.especie = especie
    }

    hacerSonido(){}
    //Metodo que deben utilizar las instancias Pajaro para poder volar
    volar(){}
}
//Definimos la subclase Zorro
class Zorro extends Animal{
    private especie:string
    constructor(nombre:string, especie:string){
        super(nombre)
        this.especie = especie
    }

    hacerSonido(){
    }
}

//Probamos las clases Zorro y Pajaro

const zorro = new Zorro('Benja', 'Zorro Rojo')
zorro.hacerSonido()

const pajaro = new Pajaro('Martin', 'Aguila')
pajaro.hacerSonido()
pajaro.volar()
