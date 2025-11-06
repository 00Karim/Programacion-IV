import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import App from "../App";

describe("HU2 - Agregar ítem al pedido", () => {
  beforeEach(() => {
    // Mock del menú que devuelve un solo producto
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => [
        { id: 1, titulo: "Café Mocca", precio: 150, imagen: "" },
      ],
    } as any);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("al hacer click en 'Agregar', el producto se suma al carrito", async () => {
    render(<App />);

    // Espera a que el producto aparezca en el Menú
    const productoEnMenu = await screen.findByText(/Café Mocca/i);
    expect(productoEnMenu).toBeInTheDocument();

    // Clic en el botón "Agregar"
    const btnAgregar = await screen.findByRole("button", { name: /Agregar/i });
    await userEvent.click(btnAgregar);

    // Ahora el texto "Café Mocca" debería aparecer dos veces:
    //  - 1 en el Menú
    //  - 1 en el Carrito (pedido)
    const ocurrencias = await screen.findAllByText(/Café Mocca/i);
    expect(ocurrencias).toHaveLength(2);
  });
});
