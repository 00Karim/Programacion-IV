"use client";
import React, { useEffect, useState } from "react";
import type { Producto } from "../../types/Product";
import BotonAgregar from "../BotonAgregar/BotonAgregar";

type MenuProps = {
  onAdd: (p: Producto) => void;
};

export const Menu: React.FC<MenuProps> = ({ onAdd }) => {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/menu")
      .then((res) => res.json())
      .then((data: Producto[]) => setProductos(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <div>
      <h2>Menú</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.titulo} — ${producto.precio}
            <BotonAgregar onAdd={onAdd} p={producto} />
          </li>
        ))}
      </ul>
    </div>
  );
};
