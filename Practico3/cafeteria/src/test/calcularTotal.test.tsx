import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import App from "../App";

describe("HU3 - Calcular total del pedido", () => {
  beforeEach(() => {
    // Mock de fetch que devuelve 2 productos
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

  test("muestra el total correcto después de agregar productos", async () => {
    render(<App />);

    // Esperar que los productos aparezcan
    const cafe = await screen.findByText(/Café Mocca/i);
    const medialuna = await screen.findByText(/Medialuna/i);
    expect(cafe).toBeInTheDocument();
    expect(medialuna).toBeInTheDocument();

    // Click en los botones "Agregar"
    const botones = await screen.findAllByRole("button", { name: /Agregar/i });
    await userEvent.click(botones[0]); // Café Mocca
    await userEvent.click(botones[1]); // Medialuna

    // Total esperado = 150 + 80 = 230
    expect(screen.getByText(/Total: \$230/i)).toBeInTheDocument();

    // También puede usarse una expresión regular genérica si el valor cambia:
    expect(screen.getByText(/total: \$\d+/i)).toBeInTheDocument();
  });
});
