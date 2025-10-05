import request from "supertest"
import app from "../../src/app"

async function crearOrderGetId(): Promise<string>{
    const pizza1 = {size: "S", toppings: ["Mortadela"]}
    const pizza2 = {size: "L", toppings: ["Anana"]}
    const testOrderRes = await request(app).post("/order").send({address: "Address en algun lugar", items: [pizza1, pizza2], status: "pending", totalPrice: 6})  
    const id = testOrderRes.body._id
    return id
} // usamos esta funcion para crear una order y guardar su id para usarla en las pruebas

describe("Chequea la logica de los metodos de OrderModel (POST)", () => {
    const pizza1 = {size: "S", toppings: ["Mortadela"]}
    const pizza2 = {size: "L", toppings: ["Anana"]}
    it("Se puede crear una order", async () => { 
        const res = await request(app)
            .post("/order")
            .send({
                address: "Arriba abajo izquierda derecha",
                items: [pizza1, pizza2],
                status: "pending",
                totalPrice: 300
        })       
        expect(res.status).toBe(201)
        expect(res.body._id).toBeDefined()
        expect(res.body.address).toBe("Arriba abajo izquierda derecha")
    })
    it("Se puede buscar una order por su id (GET)", async () => { 
        //Creamos la order para la prueba
        const id = await crearOrderGetId()
        // Buscamos la order creada arriba
        const res = await request(app).get(`/order/${id}`)
        // validamos res
        expect(res.status).toBe(200)
        expect(res.body._id).toBeDefined()
        expect(res.body.address).toBe("Arriba abajo izquierda derecha")
    })
    it("Se puede borrar una order por su id", async () => {
        // Guardamos el id de una order creada para eliminarla y ver si funciona 
        const id = await crearOrderGetId()
        // borramos la order creada
        const res = await request(app).delete(`/order/${id}`)
        // validamos res
        expect(res.status).toBe(200)
        // chequeamos si existe igualmente haciendo un get con su id
        expect((await request(app).get(`/order/${id}`)).status).toBe(404)
    })
    it("Se puede modificar el status de una order", async () => { 
        const id = await crearOrderGetId() //guardamos el id para poder acceder a la orden y editar su status
        
        const modRes = await request(app)//modificamos su status utilizando la ruta put
            .put(`/order/${id}`)
            .send({ status: "delivered"})
        
        expect(modRes.status).toBe(200) 
        // buscamos la order modificada para ver si cambio realmente
        expect((await request(app).get(`/order/${id}`)).body.status).toBe("delivered")
    })
    it("No se puede modificar el status de delivered a otro", async () => { 
        //creeamos una order para modificar y usar en esta prueba
        const id = await crearOrderGetId() //guardamos el id para poder acceder a la orden y editar su status
        await request(app).put(`/order/${id}`).send({ status: "delivered"}) //modificamos su status a delivered ya que por default es pending
        // intentamos modificar el status de nuevo de delivered a cancelled
        expect((await request(app).put(`/order/${id}`).send({ status: "cancelled"})).status).toBe(403)
        // confirmamos que no se haya cambiado la order status
        expect((await request(app).get(`/order/${id}`)).body.status).toBe("delivered")
    })
})