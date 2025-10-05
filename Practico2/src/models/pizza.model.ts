import { Pizza } from "./pizza"
import { pizzaSchema } from "./pizza"

class PizzaModel{

    constructor(public pizzas: Array<Pizza> = []){
        this.pizzas = pizzas
    }  

    createPizza(size: string, toppings: string[]){
        const newPizza = pizzaSchema.parse({size, toppings})
        this.pizzas.push(newPizza)
        return newPizza
    }

}

export default new PizzaModel()