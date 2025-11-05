import "./App.css";
import { Menu } from "./Components";
import React, { useEffect, useState } from "react";

function App() {
  const [pedido, setPedido] = useState([]);
  return (
    <>
      <Menu></Menu>
    </>
  );
}

export default App;
