import { Order } from "./order"
import { Pizza } from "./pizza"

class OrderModel{

    constructor(public id: string = "0", public orders: Array<Order> = []){
        this.id = id
        this.orders = orders
    }  

    createOrder(address: string, items: Array<Pizza>, status: string, totalPrice: number){
        
    }

    deleteOrder(_id: string){
        
    }

    getAllOrders(){
        
    }

    getOrderById(_id: string){

    }

    changeStatus(_id: string, newStatus: string){

    }

}

export default new OrderModel()