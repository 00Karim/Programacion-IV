// rutas: 
// POST order (crear un orden)
// PUT order (cambiar el status de order por id)
// GET order (get por id)
// DELETE order (delete por id)
// POST pizza

import express from "express"
// import orderRoutes from "./routes/orderRoutes"
// import pizzaRoutes from "./routes/pizzaRoutes"

// src/utils/placeholder.ts
import { Request, Response } from "express";

export function placeholder() {
  return (_req: Request, res: Response) => {
    res.status(501).json({ message: "Ruta no implementada todavía" });
  };
}

const app = express()
app.use(express.json())


app.use("/order", placeholder())
app.use("/pizza", placeholder())

app.use((err,res) => { //Manejo implementacion de rutas
    console.error(err)
    res.status(501).json({error: "Error implementando la ruta solicitada"})
})

app.use((err,res) => { //Manejo basico de error 500
    console.error(err)
    res.status(500).json({error: "Error interno del servidor"})
})

export default app


