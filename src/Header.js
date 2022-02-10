import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from "./SideDrawer";
import "./Header.css";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
  <AppBar
  position="fixed"
  style={{
    backgroundColor: "#2f2f2f",
    boxShadow: "none",
    padding: "10 0px",
  }}
  >
  <Toolbar>
    <div className="header_logo">
      <div className="header_logo_venue"> Mohsen Chavoshi </div>
      <div className="header_logo_title"> Persian Concert </div>
    </div>
    <IconButton
      aria-label="Menu"
      color="inherit"
      onClick={() => toggleDrawer(true)}
    >
      <MenuIcon />
    </IconButton>
    <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
  </Toolbar>
  </AppBar>
);
}

export default Header;
