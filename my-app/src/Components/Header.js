import React from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import {Menu, MenuOpen} from "@material-ui/icons";

export default function Header({menuOpen, setMenuOpen}) {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <div
          className="menu-icon"
          onClick={() => {
            !menuOpen ? setMenuOpen(true) : setMenuOpen(false);
          }}
          className="menu-icon"
        >
          {menuOpen ? <MenuOpen /> : <Menu />}
        </div>
      </Toolbar>
    </AppBar>
  );
}
