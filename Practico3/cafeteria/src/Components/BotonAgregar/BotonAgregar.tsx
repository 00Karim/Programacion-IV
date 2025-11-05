import React from "react";
import type { Producto } from "../../types/Product";

type BotonAgregarProps = {
  onAdd: (p: Producto) => void;
  p: Producto; //
};

const BotonAgregar: React.FC<BotonAgregarProps> = ({ onAdd, p }) => {
  return <button onClick={() => onAdd(p)}>Agregar</button>;
};

export default BotonAgregar;
