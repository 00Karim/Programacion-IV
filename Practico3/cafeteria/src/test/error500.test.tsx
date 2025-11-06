import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { rest } from "msw";
import { server } from "../test/mocks/server";
import App from "../App";

describe("HU6 - Error 500 al cargar menú", () => {
  test("muestra 'Error al cargar menú' cuando el servidor devuelve 500", async () => {
    server.use(
      rest.get("*/api/menu", (req, res, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: "Error al cargar menú" })
        );
      })
    );

    render(<App />);

    // Esperar a que aparezca el mensaje
    const errorMsg = await screen.findByText(/Error al cargar menú/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
