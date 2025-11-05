import React, { useEffect, useState } from "react";
import type { Producto } from "../../types/Product";
import BotonAgregar from "../BotonAgregar/BotonAgregar";

type MenuProps = {
  onAdd: (p: Producto) => void;
};

export const Menu: React.FC<MenuProps> = ({ onAdd }) => {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then(async (res) => {
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();
        return data;
      })
      .then((data: Producto[]) => {
        setProductos(data);
        setError(null);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
        setError("Error al cargar menú");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Cargando menú...</p>;
  if (error) return <p>{error}</p>;
  if (productos.length === 0) return <p>No hay productos disponibles</p>;

  return (
    <div>
      <h2>Menú</h2>
      <ul aria-label="menu-list">
        {productos.map((p) => (
          <li key={p.id}>
            {p.titulo} — ${p.precio}
            <BotonAgregar onAdd={onAdd} p={p} />
          </li>
        ))}
      </ul>
    </div>
  );
};
