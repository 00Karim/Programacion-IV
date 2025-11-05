import React from "react";
import type { Producto } from "../../types/Product";

type BotonEnviarProps = {
  pedido: Producto[];
  onSend: (pedido: Producto[]) => void;
};

const BotonEnviar: React.FC<BotonEnviarProps> = ({ pedido, onSend }) => {
  return (
    <button onClick={() => onSend(pedido)} disabled={pedido.length === 0}>
      Enviar pedido
    </button>
  );
};

export default BotonEnviar;
