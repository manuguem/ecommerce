import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./CardItem.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const CardItem = () => {
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardContent>
    //     <div>
    //       <img className="img-size" src="./178483-1200-auto.webp" alt="" />
    //     </div>
    //     <CardActions>
    //       <Button size="small">Agregar</Button>
    //     </CardActions>
    //   </CardContent>
    // </Card>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <div>
              <img className="img-size" src="./178483-1200-auto.webp" alt="" />
            </div>
            <Button size="small">Agregar</Button>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
            <div>
              <img className="img-size" src="./180368-1200-auto.webp" alt="" />
            </div>
            <Button size="small">Agregar</Button>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card sx={{ maxWidth: 345 }}>
            <div>
              <img className="img-size" src="./156597-1200-auto.webp" alt="" />
            </div>
            <Button size="small">Agregar</Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardItem;
