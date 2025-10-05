import { exitCode } from "process";
import PizzaModel from "../../src/models/pizza.model";

describe("Chequear la logica de los metodos de PizzaModel", () => {
    it("Se puede crear una pizza", () => {
        const newPizza = PizzaModel.createPizza("S", ["Manteca", "Queso Roquefort"])
        expect(newPizza).toBeDefined()
        expect(newPizza.size).toBe("S")
        expect(PizzaModel.pizzas.length).toBe(1)
    })
})