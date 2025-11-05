import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import TotalPedido from "./Components/Total/Total";
import BotonEliminar from "./Components/BotonEliminar/BotonEliminar";
import BotonEnviar from "./Components/BotonEnviar/BotonEnviar";
import { useState } from "react";
import type { Producto } from "./types/Product";

function App() {
  const [pedido, setPedido] = useState<Producto[]>([]);
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleAdd = (p: Producto) => {
    setPedido((prev) => [...prev, p]);
  };

  const handleRemove = (producto: Producto) => {
    const index = pedido.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      setPedido((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSend = async (pedidoActual: Producto[]) => {
    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedidoActual),
      });
      const data = await res.json();

      if (data.success) {
        setMensaje("Pedido confirmado");
        setPedido([]);
      } else {
        setMensaje("Error al confirmar el pedido");
      }
    } catch {
      setMensaje("Error de conexión con el servidor");
    }
  };

  return (
    <>
      <h1>Mi pedido</h1>
      <Menu onAdd={handleAdd} />

      <ul aria-label="order-list">
        {pedido.map((p, i) => (
          <li key={i}>
            {p.titulo} — ${p.precio}{" "}
            <BotonEliminar onRemove={handleRemove} p={p} />
          </li>
        ))}
      </ul>

      <TotalPedido pedido={pedido} />
      <BotonEnviar pedido={pedido} onSend={handleSend} />
      {mensaje && <p>{mensaje}</p>}
    </>
  );
}

export default App;
