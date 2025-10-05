import { Router } from "express"
import OrderModel  from "../models/order.model"

const orderRoutes = Router()

orderRoutes.post("/", (req, res) => {
    try{
        const { address, items, status } = req.body
        const newOrder = OrderModel.createOrder(address, items, status)
        return res.status(201).json(newOrder)
    }catch(e){
        return res.status(400).json({error: "Hubo un error al crear la orden"})
    }
})

orderRoutes.get("/", (req, res) => {
    try{
        const allOrders = OrderModel.getAllOrders()
        return res.status(200).json(allOrders)     
    }catch(e){
        return res.status(500).json({error: "Error interno del servidor"})
    }
})

orderRoutes.get("/:id", (req, res) => {
    try{
        const order = OrderModel.getOrderById(req.params.id)
        if(!order)
            return res.status(404).json(order)
        return res.status(200).json(order)
    }catch(e){
        return res.status(500).json({error: "Error interno del servidor"})
    }
})

orderRoutes.put("/:id", (req, res) => {
    try{
        const { id } = req.params
        const { status } = req.body
        if(!OrderModel.getOrderById(id)) return res.status(404).json("No se encontro la orden a eliminar")
        const updatedOrder = OrderModel.changeStatus(id, status)
        return res.status(200).json(updatedOrder)
    }catch(e: any){
        if(e.message?.includes("No se puede cambiar el estado de delivered a otro")){
            return res.status(403).json({error: "No esta permitido cambiar el status de delivered a otro"})
        }
        return res.status(500).json({error: "Error interno del servidor"})
    }
})

orderRoutes.delete("/:id", (req, res) => {
    try{
        if(!OrderModel.getOrderById(req.params.id)) return res.status(404).json("No se encontro la orden a eliminar")
        const deletedOrder = OrderModel.deleteOrder(req.params.id)
        return res.status(200).json(deletedOrder)
    }catch(e){
        return res.status(500).json({error: "Error interno del servidor"})
    }
})

export default orderRoutes