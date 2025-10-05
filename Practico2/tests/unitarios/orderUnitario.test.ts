import { orderSchema } from "../../src/models/order"
import { pizzaSchema } from "../../src/models/pizza";

describe("Chequeos de order", () => {
    // pizzas para usar en las pruebas siguientes
    const pizza1 = pizzaSchema.parse({size: "S", toppings: ["Mortadela"]})
    const pizza2 = pizzaSchema.parse({size: "L", toppings: ["Anana"]})
    it("No se debe poder hacer un order si address es menor a 10", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa", 
                items: [pizza1, pizza2],
                status: "pending",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer un order si array de items no tiene nada", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa", 
                items: [],
                status: "pending",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una order si status es undefined", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa en bahia blanca", 
                items: [pizza1, pizza2],
                status: "",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una order si status no es un valor permitido", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa", 
                items: [pizza1, pizza2],
                status: "dropping",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una order si total price da negativo", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa", 
                items: [pizza1, pizza2],
                status: "pending",
                totalPrice: -400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("Se debe poder hacer una order si esta todo bien", () => {
        const caracteristicas = 
            { 
                _id: "1",
                address: "Mi casa en la esquina", 
                items: [pizza1, pizza2],
                status: "pending",
                totalPrice: 400
            }
        const newOrder = orderSchema.parse(caracteristicas) 
        expect(newOrder.address).toBe("Mi casa en la esquina");
    })
})