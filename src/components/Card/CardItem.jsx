import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./CardItem.css";

const CardItem = () => {
  return (
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
