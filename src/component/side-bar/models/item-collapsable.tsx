import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import InboxIcon from "@mui/icons-material/Home";
import { Collapse, ListItemButton, ListItemIcon, ListItemText, List } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";
import { ExpandMenuItem, SideBarMenuItem } from "./menu-item";

export const ItemCollapsable = ( props: { item : ExpandMenuItem }) => {
  let navigate = useNavigate();
  const [openMenuItem, setOpen] = React.useState(true);

  const handleClick = () => {
   
    setOpen(props.item.isOpen = !props.item.isOpen);
  };
  return (
    <>
      <ListItemButton onClick={() => handleClick()}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>

        <ListItemText primary={props.item.name} />
        {props.item.isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {props.item.optionList.map((option, index: number) => (
        <Collapse key={index} in={props.item.isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 6 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary={option.name} />
            </ListItemButton>
          </List>
        </Collapse>  
      ))}
    </>
  );
};

export default ItemCollapsable;
