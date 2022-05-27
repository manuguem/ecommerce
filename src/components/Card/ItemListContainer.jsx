import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const productos = [
    {
      title: "S22 Ultra",
      price: 220000,
      image: "178483-1200-auto.webp",
      stock: 3,
      id: 1,
    },
    {
      title: "Galaxy Watch 4",
      price: 34000,
      image: "180368-1200-auto.webp",
      stock: 3,
      id: 2,
    },
    {
      title: "Lavarropa Samsung",
      price: 86000,
      image: "156597-1200-auto.webp",
      stock: 3,
      id: 3,
    },
  ];

  const obtProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 4000);
    });
  };

  useEffect(() => {
    obtProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((err) => {})
      .finally(() => {});
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ textAlign: "center", height: "100%", padding: "0.8rem" }}
      >
        <ItemCount />
      </Card>
    </Box>
  );
};

export default ItemListContainer;
