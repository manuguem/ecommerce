import ItemListContainer from "../Card/ItemListContainer";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";

const ItemList = (products) => {
  return (
    <Grid
      container
      spacing={2}
      style={{
        justifyContent: "center",
        alignContent: "center",
        marginTop: "1.5rem",
      }}
    >
      {/* <Grid item md={2}>
        <div>
          <ItemListContainer image={image} />
        </div>
      </Grid>
      <Grid item md={2}>
        <div>
          <ItemListContainer image={image} />
        </div>
      </Grid>
      <Grid item md={2}>
        <div>
          <ItemListContainer image={image} />
        </div>
      </Grid> */}
      {products.map(({ title, price, id, stock, image }) => {
        return (
          <Grid item md={2}>
            <ItemListContainer price={price} image={image} stock={stock} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ItemList;
