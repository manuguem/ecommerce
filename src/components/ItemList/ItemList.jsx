import ItemListContainer from "../Card/ItemListContainer";
import { Grid } from "@mui/material";

const ItemList = () => {
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
      <Grid item md={2}>
        <div>
          <ItemListContainer image={"178483-1200-auto.webp"} />
        </div>
      </Grid>
      <Grid item md={2}>
        <div>
          <ItemListContainer image={"180368-1200-auto.webp"} />
        </div>
      </Grid>
      <Grid item md={2}>
        <div>
          <ItemListContainer image={"156597-1200-auto.webp"} />
        </div>
      </Grid>
    </Grid>
  );
};

export default ItemList;
