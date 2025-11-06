import React from "react";
import type { Producto } from "../../types/Product";

type BotonEliminarProps = {
  onRemove: (p: Producto) => void;
  p: Producto;
};

const BotonEliminar: React.FC<BotonEliminarProps> = ({ onRemove, p }) => {
  return <button onClick={() => onRemove(p)}>Eliminar</button>;
};

export default BotonEliminar;
