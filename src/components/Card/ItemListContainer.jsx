import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ItemListContainer = ({ image }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card
        sx={{ maxWidth: 345 }}
        style={{ textAlign: "center", height: "100%", padding: "0.8rem" }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={`./${image}`}
          alt="Images"
        />
        <Button size="small" style={{ color: "black", fontWeight: "bolder" }}>
          Agregar
        </Button>
      </Card>
    </Box>
  );
};

export default ItemListContainer;
