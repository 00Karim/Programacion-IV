import { orderSchema } from "../../src/models/order"

describe("Chequeos de order", () => {
    it("No se debe poder hacer un order si address es menor a 10", () => {
        const caracteristicas = 
            { 
                address: "Mi casa", 
                items: ["Pizza 1", "Pizza 2"],
                status: "pending",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer un order si array de items no tiene nada", () => {
        const caracteristicas = 
            { 
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
                address: "Mi casa en bahia blanca", 
                items: ["Pizza 1", "Pizza 2"],
                status: "",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una order si status no es un valor permitido", () => {
        const caracteristicas = 
            { 
                address: "Mi casa", 
                items: ["Pizza 1", "Pizza 2"],
                status: "dropping",
                totalPrice: 400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
    it("No se debe poder hacer una order si total price da negativo", () => {
        const caracteristicas = 
            { 
                address: "Mi casa", 
                items: ["Pizza 1", "Pizza 2"],
                status: "pending",
                totalPrice: -400
            }
        expect(() => orderSchema.parse(caracteristicas)).toThrow();
    })
})