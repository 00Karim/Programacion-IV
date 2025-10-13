// rutas: 
// POST order (crear un orden)
// PUT order (cambiar el status de order por id)
// GET order (get por id)
// DELETE order (delete por id)
// POST pizza

import express from "express"
import orderRoutes from "./routes/orderRoutes"
import pizzaRoutes from "./routes/pizzaRoutes"

const app = express()
app.use(express.json())


app.use("/order", orderRoutes)
app.use("/pizza", pizzaRoutes)

// // manejo basico del error 501 cuando una ruta no fue implementada aun
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err);
//   res.status(501).json({ error: "Error implementando la ruta solicitada" });
// });

// // manejo basico del error 500 
// app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err);
//   res.status(500).json({ error: "Error interno del servidor" });
// });

export default app


