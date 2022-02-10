import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import React from 'react';

function SideDrawer(props) {
  const { open, onClose } = props;
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => onClose(false)}
    >
      <List component="nav">
        <ListItem
        button onClick={() => console.log("Featured")}
        >
        Start Time
        </ListItem>

        <ListItem
        button onClick={() => console.log("Venue NFO")}
        >
          Venue Info
        </ListItem>

        <ListItem
        button onClick={() => console.log("Highlights")}
        >
        Highlights
        </ListItem>

        <ListItem
        button onClick={() => console.log("Pricing")}
        >
        Pricing
        </ListItem>

        <ListItem
        button onClick={() => console.log("Location")}
        >
          Location
        </ListItem>
      </List>
    </Drawer>
  );
}

export default SideDrawer;
