import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { Menu } from "../Components/Menu/Menu";

// Si usas MSW, importa el server y handlers en setupTests.ts
// y asegurate de que /api/menu devuelva un item "Mocca".

describe("HU1 - Visualización inicial del menú", () => {
  test("Encuentra el cafe Mocca", async () => {
    const onAdd = vi.fn(); // <- stub requerido
    render(<Menu onAdd={onAdd} />); // <- pasar la prop requerida

    // espera a que llegue el mock del menú y se renderice
    expect(await screen.findByText(/Mocca/i)).toBeInTheDocument();
  });
});
