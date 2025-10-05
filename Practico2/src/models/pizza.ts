import { z } from "zod"

const sizeEnum = ["S", "M", "L"]

export const pizzaSchema = z.object({
    size: z.enum(sizeEnum, {
        error: (issue) => //Issue se utiliza para recibir el tipo de error con Zod
            issue.input === undefined //Si no se envio nada, recibe como input undefined
                ? "El tamanio de la pizza es obligatorio"
                : "El tamanio de la pizza debe ser S, M o L"
    }),
    toppings: z.array(z.string()).max(5, "El maximo de toppings permitidos es 5")
})

export type Pizza = z.infer<typeof pizzaSchema>