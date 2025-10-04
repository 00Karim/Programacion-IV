import { pizzaSchema } from "../../src/models/pizza"

describe("Chequeos de pizza", () => {
    it("No se debe poder hacer una pizza con un tamanio no disponible", () => {
        const caracteristicas = { size: "XXL", toppings: ["Mortadela", "Lechuga", "Anana"]}
        expect(() => pizzaSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una pizza con mas de 5 toppings", () => {
        const caracteristicas = { size: "S", toppings: ["Mortadela", "Lechuga", "Anana", "Limon", "Chocolate", "Gengibre"]}
        expect(() => pizzaSchema.parse(caracteristicas)).toThrow()
    })
    it("La pizza deberia ser creada", () => {
        const caracteristicas = { size: "S", toppings: ["Mortadela", "Lechuga", "Anana"]}
        const pizzaCreada = pizzaSchema.parse(caracteristicas)
        expect(pizzaCreada.size).toBe("S")
    })
})