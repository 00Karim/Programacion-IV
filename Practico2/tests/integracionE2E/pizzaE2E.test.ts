import request from "supertest"
import app from "../../src/app"

describe("Chequea la logica de los metodos de PizzaModel con supertest", () => {
    it("Se puede crear una pizza (POST)", async () => {
        const res = await request(app)
            .post("/pizza")
            .send({
                size: "S",
                toppings: ["Tomate", "Bicarbonato de sodio", "Aluminio"]
        })       
        expect(res.status).toBe(201)
        expect(res.body.size).toBe("S")
    })
})