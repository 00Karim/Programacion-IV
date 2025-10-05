import { z } from "zod"
import { pizzaSchema } from "./pizza"

const statusEnum = ["pending", "completed", "delivered", "cancelled"]

export const orderSchema = z.object({
    address: z.string().min(10, "La direccion debe tener como minimo 10 caracteres"),
    items: z.array(pizzaSchema).min(1, "La cantidad de items no puede estar vacia"),
    status: z.enum(statusEnum, {
        error: (issue) =>
            issue.input === undefined
                ? "El estado del pedido es obligatorio"
                : "El estado de la orden debe ser pending, completed, delivered o cancelled",
    }),
    totalPrice: z.number().nonnegative().default(0)
})

export type Order = z.infer<typeof orderSchema>