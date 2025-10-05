import { Order } from "./order"
import { Pizza } from "./pizza"
import { orderSchema } from "./order"
import { ZodError } from "zod"

class OrderModel{

    constructor(public id: string = "0", public orders: Array<Order> = []){
        this.id = id
        this.orders = orders
    }  

    createOrder(address: string, items: Array<Pizza>, status: string){
        try {
            let totalPrice = 0
            for(const item of items){
                if(item.size === "S")//Total price se calcula en base al tamanio de la pizza
                    totalPrice+= 5
                else if (item.size === "M")
                    totalPrice+= 10
                else
                    totalPrice+=15
                totalPrice+= item.toppings.length * 2//Luego se le suma el precio de cada topping que valen todos $2
            }
            const newOrder = orderSchema.parse({_id: this.id, address, items, status, totalPrice})
            this.orders.push(newOrder)
            this.id = String(Number(this.id + 1)) // lo convertimos a numero para sumarle 1 y despues lo devolvemos a string
            return newOrder
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error("Datos inválidos al crear la orden: " + error.issues[0]?.message); // error de validación
            } else {
                throw new Error("Error inesperado al crear la orden"); // otro tipo de error
            }
        }
    }

    deleteOrder(_id: string){
        try {
            for(let i = 0; i<this.orders.length; i++){
                if(this.orders[i]?._id === _id){ // recorremos todo el array en busca de un match de id 
                    this.orders.splice(i, 1) // si lo encontramos lo sacamos del array
                    return true
                    i = this.orders.length // cuando lo elimina hacemos que i sea del tamanio del array asi se termina el for loop
                }
            }
            return false
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error("Datos inválidos al eliminar la orden: " + error.issues[0]?.message); // error de validación
            } else {
                throw new Error("Error inesperado al eliminar la orden"); // otro tipo de error
            }
        }
    }

    getAllOrders(){
        try {
            return this.orders //Devolvemos todos las ordenes en el array
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error("Datos inválidos al obtener las ordenes: " + error.issues[0]?.message); // error de validación
            } else {
                throw new Error("Error inesperado al obtener las ordenes"); // otro tipo de error

            }
        }
    }

    getOrderById(_id: string){
        try {
            for(let i = 0; i<this.orders.length; i++){
                if(this.orders[i]?._id === _id){ // recorremos todo el array en busca de un match de id 
                    return this.orders[i] // si lo encontramos lo devolvemos
                }
            }
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error("Datos inválidos al obtener la orden: " + error.issues[0]?.message); // error de validación
            } else {
                throw new Error("Error inesperado al obtener la orden"); // otro tipo de error

            }
        }
    }

    changeStatus(_id: string, newStatus: string){
        try {
            let currentOrder
            let currentStatus
            let currentOrderIndex
            for(let i = 0; i<this.orders.length; i++){
                if(this.orders[i]?._id === _id){ // recorremos todo el array en busca de un match de id 
                    currentOrder = this.orders[i] // asignamos ese objeto a currentOrder asi lo podemos manipular mas facilmente
                    currentOrderIndex = i // le asignamos el valor de i actual para poder reemplazar la order vieja con la order con otro status
                    currentStatus = currentOrder?.status // ademas le asignamos el valor correspondiente a currentStatus para poder aplicar las distintas condiciones que deciden si se puede cambiar status 
                    i = this.orders.length // cuando lo encuentra hacemos que i sea del tamanio del array asi se termina el for loop
                }
            }
            if(currentStatus === "delivered"){
                throw new Error("No se puede cambiar el estado de delivered a otro")
            }
            else{
                if (currentOrder && currentOrderIndex !== undefined){ // asi no nos da el error: The left-hand side of an assignment expression may not be an optional property access.ts(2779)
                    currentOrder.status = newStatus
                    this.orders[currentOrderIndex] = currentOrder  
                    return true
                }
            }
        } catch (error) {
            if (error instanceof ZodError) {
                throw new Error("Datos inválidos al cambiar el estado de la orden: " + error.issues[0]?.message); // error de validación
            } 
            else if (error instanceof Error){ // de esta forma nos muestra el error si lo lanzamos dentro del try
                throw error
            }
            else {
                throw new Error("Error inesperado al cambiar el estado de la orden"); // otro tipo de error

            }
        }
    }

}

export default new OrderModel()