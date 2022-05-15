import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./CardCont.css";

const ItemListContainer = ({ image }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginTop: "1.5rem",
        }}
      >
        <Card
          sx={{ maxWidth: 345 }}
          style={{ textAlign: "center", height: "100%" }}
        >
          <img className="img-size" src={`./${image}`} />
          <Button size="small">Agregar</Button>
        </Card>
      </Grid>
    </Box>
  );
};

export default ItemListContainer;
