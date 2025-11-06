import React from "react";
import type { Producto } from "../../types/Product";

type TotalPedidoProps = {
  pedido: Producto[];
};

const TotalPedido: React.FC<TotalPedidoProps> = ({ pedido }) => {
  const total = pedido.reduce((acc, p) => acc + (p.precio ?? 0), 0);

  return (
    <div>
      <strong>Total: ${total}</strong>
    </div>
  );
};

export default TotalPedido;
