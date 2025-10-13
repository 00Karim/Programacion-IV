import { Router } from "express";
import pizzaModel from "../models/pizza.model";

const rutasPizza = Router()

rutasPizza.post("/", (req, res) => {
    const { size, toppings } = req.body
    console.log(`ESTOY ACA\nSIZE: ${size}\nTOPPINGS: ${toppings}`)
    const nuevaPizza = pizzaModel.createPizza(size, toppings)
    if(nuevaPizza) return res.status(201).json(nuevaPizza)
    else return res.status(400).json({message: "Hubo un error al crear la pizza"})
})

export default rutasPizza;