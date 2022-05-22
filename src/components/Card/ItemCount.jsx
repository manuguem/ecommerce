import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";

const ItemCount = (stock, onAdd) => {
  const [count, setCount] = useState(1);
  stock = 5;

  const SumCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const RestCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  onAdd = () => {
    alert(`Se agregaron ${count} productos al carrito`);
  };

  return (
    <>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <Button onClick={RestCount}>-</Button>
        <p>{count}</p>
        <Button onClick={SumCount}>+</Button>
      </div>
      <Button
        onClick={onAdd}
        size="small"
        style={{ color: "black", fontWeight: "bolder" }}
      >
        Agregar
      </Button>
    </>
  );
};

export default ItemCount;
