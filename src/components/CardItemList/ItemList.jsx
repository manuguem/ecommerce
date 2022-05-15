import ItemListContainer from "../Card/ItemListContainer";
import { Grid } from "@mui/material";

const ImageItem = () => {
  return (
    <Grid item xs={2}>
      <ItemListContainer image={"178483-1200-auto.webp"} />
    </Grid>
  );
};

export default ImageItem;
