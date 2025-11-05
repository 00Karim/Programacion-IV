import "./App.css";
import { Menu } from "./Components/Menu/Menu";
import TotalPedido from "./Components/Total/Total";
import BotonEliminar from "./Components/BotonEliminar/BotonEliminar";
import { useState } from "react";
import type { Producto } from "./types/Product";

function App() {
  const [pedido, setPedido] = useState<Producto[]>([]);

  const handleAdd = (p: Producto) => {
    setPedido((prev) => [...prev, p]);
  };

  const handleRemove = (producto: Producto) => {
    // elimina solo la primera coincidencia de ese producto
    const index = pedido.findIndex((p) => p.id === producto.id);
    if (index !== -1) {
      setPedido((prev) => prev.filter((_, i) => i !== index));
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
    </>
  );
}

export default App;
