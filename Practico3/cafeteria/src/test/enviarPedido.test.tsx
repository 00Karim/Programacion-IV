import { render, screen, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, beforeAll, afterAll, afterEach } from "vitest";
import { rest } from "msw";
import { server } from "../test/mocks/server";
import App from "../App";

describe("HU5 - enviar pedido", () => {
  beforeAll(() => {
    server.listen({ onUnhandledRequest: "error" });
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  test("envía el pedido y muestra 'Pedido confirmado', limpiando el estado", async () => {
    // Mock del menú y del envío
    server.use(
      rest.get("*/api/menu", (_req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json([
            { id: 1, titulo: "Café Mocca", precio: 150, imagen: "" },
            { id: 2, titulo: "Medialuna", precio: 80, imagen: "" },
          ])
        );
      }),
      rest.post("*/api/orders", async (req, res, ctx) => {
        // opcional: leer el body si querés validarlo
        await req.json().catch(() => ({}));
        return res(
          ctx.status(201),
          ctx.json({
            success: true,
            message: "Pedido confirmado",
            orderId: "mock-1",
          })
        );
      })
    );

    const user = userEvent.setup();
    render(<App />);

    // Espera a que el menú cargue
    expect(await screen.findByText(/Café Mocca/i)).toBeInTheDocument();

    // Agregar un producto
    const agregarBtns = await screen.findAllByRole("button", {
      name: /Agregar/i,
    });
    await user.click(agregarBtns[0]); // agrega "Café Mocca"

    // El carrito debe tener 1 item
    const orderList = screen.getByRole("list", { name: /order-list/i });
    expect(within(orderList).getAllByRole("listitem")).toHaveLength(1);

    // Enviar pedido
    const btnEnviar = screen.getByRole("button", { name: /Enviar pedido/i });
    await user.click(btnEnviar);

    // Esperar el mensaje de confirmación (con waitFor)
    await waitFor(() => {
      expect(screen.getByText(/Pedido confirmado/i)).toBeInTheDocument();
    });

    // El estado debe limpiarse: lista vacía
    expect(within(orderList).queryAllByRole("listitem")).toHaveLength(0);

    // Total $0
    expect(screen.getByText(/Total: \$0/i)).toBeInTheDocument();

    // Botón Enviar deshabilitado cuando no hay items
    expect(btnEnviar).toBeDisabled();
  });
});
