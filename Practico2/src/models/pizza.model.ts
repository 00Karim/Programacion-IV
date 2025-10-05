import { Pizza } from "./pizza"

class PizzaModel{

    constructor(public pizzas: Array<Pizza> = []){
        this.pizzas = pizzas
    }  

    createPizza(size: string, toppings: string[]){
        
    }

}

export default new PizzaModel()