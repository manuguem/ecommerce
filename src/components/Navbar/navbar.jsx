import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import "./Navbar.css";
import { Button } from "@mui/material";
import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <AppBar position="static" style={{ background: "#2E3B55" }}>
      <Toolbar>
        <ul className="list-styles">
          <li>
            <button>Destacados</button>
          </li>
          <li>
            <button>Móviles</button>
          </li>
          <li>
            <button>TV/Audio</button>
          </li>
          <li>
            <button>Hogar</button>
          </li>
        </ul>
        <Button color="inherit" style={{ marginLeft: "auto" }}>
          <CartWidget />
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
