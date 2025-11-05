import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import App from "../App";

describe("HU4 - eliminar producto del pedido", () => {
  beforeEach(() => {
    // Mock del menú con 2 productos
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, titulo: "Café Mocca", precio: 150, imagen: "" },
        { id: 2, titulo: "Medialuna", precio: 80, imagen: "" },
      ],
    } as any);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("al clickear 'Eliminar' se quita del carrito y el total vuelve a $0", async () => {
    const user = userEvent.setup();
    render(<App />);

    // Esperar a que se cargue el menú
    expect(await screen.findByText(/Café Mocca/i)).toBeInTheDocument();

    // Agregar un producto (primer botón "Agregar")
    const agregarBtns = await screen.findAllByRole("button", {
      name: /Agregar/i,
    });
    await user.click(agregarBtns[0]);

    // Verificar que el carrito tenga 1 item
    const orderList = screen.getByRole("list", { name: /order-list/i });
    let items = within(orderList).getAllByRole("listitem");
    expect(items).toHaveLength(1);

    // Verificar que el total > 0 (formato) y específicamente $150
    expect(screen.getByText(/total: \$\d+/i)).toBeInTheDocument();
    expect(screen.getByText(/Total: \$150/i)).toBeInTheDocument();

    // Eliminar ese producto
    const eliminarBtn = within(orderList).getByRole("button", {
      name: /Eliminar/i,
    });
    await user.click(eliminarBtn);

    // Ahora la lista debe estar vacía
    expect(within(orderList).queryAllByRole("listitem")).toHaveLength(0);

    // Y el total debe volver a $0
    expect(screen.getByText(/Total: \$0/i)).toBeInTheDocument();
  });
});
