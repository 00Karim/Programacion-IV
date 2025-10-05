import { orderSchema } from "../../src/models/order";
import { pizzaSchema } from "../../src/models/pizza";
import OrderModel from "../../src/models/order.model"

describe("Chequea la logica de los metodos de OrderModel", () => {
    const pizza1 = pizzaSchema.parse({size: "S", toppings: ["Mortadela"]})
    const pizza2 = pizzaSchema.parse({size: "L", toppings: ["Anana"]})
    let idActual = "" // guardamos la id de la order creada para usar en los tests que se hacen mas adelante en los
    // que probamos buscar o borrar una order por id
    it("Se puede crear una order", () => { 
        const newOrder = OrderModel.createOrder("A una cuadra de la cuadra", [pizza1, pizza2], "pending", 3000)
        expect(newOrder).toBeDefined()
        idActual = newOrder._id
    })
    it("Se puede buscar una order por su id", () => { 
        const foundOrder = OrderModel.getOrderById(idActual)      
        expect(foundOrder).toBeDefined()
        expect(foundOrder.totalPrice).toBe(400)
        expect(foundOrder.status).toBe("pending")
    })
    it("Se puede recibir todas las ordenes", () => { 
        const allOrders = OrderModel.getAllOrders()      
        expect(allOrders[0]._id).toBe("0")
        expect(allOrders[1]._id).toBe("1")
    })
    it("Se puede borrar una order por su id", () => { 
        const largoPrevio = OrderModel.orders.length
        OrderModel.deleteOrder(idActual)      
        const largoPosterior = OrderModel.orders.length
        expect(largoPosterior).toBeLessThan(largoPrevio)
    })
    it("Se puede modificar el status de una order", () => { 
        const newOrder = OrderModel.createOrder("A una cuadra de la cuadra", [pizza1, pizza2], "pending", 3000)
        idActual = newOrder._id
        OrderModel.changeStatus(idActual, "delivered")
        expect(newOrder.status).toBe("delivered")
    })
    it("El status de una order no puede pasar de delivered a cancelled", () => { 
        expect( () => OrderModel.changeStatus(idActual, "cancelled")).toThrow()
    })
})