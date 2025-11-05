"use client";
import React, { useEffect, useState } from "react";

import type { Producto } from "../../types/Product";

import { BotonAgregar } from "../BotonAgregar/BotonAgregar/BotonAgregar";

const Menu: React.FC = () => {
  const [productos, setProductos] = useState<Producto[]>();

  useEffect(() => {
    fetch("http://localhost:/api/menu")
      .then((res) => res.json())
      .then((data: Producto[]) => {
        console.log(data);
        setProductos(data);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);
  return (
    <div>
      <ul>
        {productos?.map((producto, index) => (
          <li key={index + producto.titulo}>{producto.titulo}</li>
          <BotonAgregar onAdd=></BotonAgregar>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
