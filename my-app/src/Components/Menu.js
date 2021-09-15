import {
  Container,
  MenuList,
  MenuItem,
  Paper,
  ListItemIcon,
  Divider,
  Typography,
} from "@material-ui/core";
import {Home, Person, PowerSettingsNew} from "@material-ui/icons";
import React from "react";

export default function Menu() {
  return (
    <div className="menu-list-container">
      <MenuList className="menu-list">
        <Divider></Divider>
        <MenuItem>
          <ListItemIcon>
            <Home fontSize="small" color="primary" />
          </ListItemIcon>
          <Typography color="primary">Home</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" color="primary" />
          </ListItemIcon>
          <Typography color="primary">Login</Typography>
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <ListItemIcon>
            <PowerSettingsNew fontSize="small" color="primary" />
          </ListItemIcon>
          <Typography color="primary">Logout</Typography>
        </MenuItem>
        <Divider></Divider>
      </MenuList>
    </div>
  );
}
