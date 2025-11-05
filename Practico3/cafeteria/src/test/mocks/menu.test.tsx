import { render, screen } from "@testing-library/react";
import { Menu } from "../../Components";
import { describe, test, expect } from "vitest";

describe("TodoApp", () => {
  test("Encuentra el cafe Mocca", async () => {
    // Renderiza el componente TodoApp en un entorno de prueba virtual
    render(<Menu />);

    // Busca un elemento que contenga el texto "no hay tareas" (ignorando mayúsculas/minúsculas)
    // y verifica que esté presente en el documento.
    expect(await screen.findByText(/Mocca/i)).toBeInTheDocument();
  });
});
