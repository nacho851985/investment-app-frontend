import { List } from "@mui/material";

import { ExpandMenuItem, SideBarMenuItem } from "./menu-item";
import Item from "./item";
import React from "react";

const MenuItem = () => {
  const menuItem = new SideBarMenuItem();
  const menuItemList = menuItem.getMenuItems();

  const [selectedMenuItemList, setSelectedMenuItem] =
    React.useState(menuItemList);


  const HandleSelectedMenuItem = (optionSelected: ExpandMenuItem) => {
    selectedMenuItemList.forEach((item) => {
      if (optionSelected.name === item.name) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
      item.optionList.forEach((option) => {
        if (option.name === optionSelected.name) {
          option.isSelected = true;
        } else {
          option.isSelected = false;
        }
      });
    });

    setSelectedMenuItem(selectedMenuItemList);
  };

  return (
    <>
      <List component="nav">
        {selectedMenuItemList.map((item, index) => (
          <Item
            item={item}
            key={index}
            setSelectedItem={HandleSelectedMenuItem}
          ></Item>
        ))}
      </List>
    </>
  );
};
export default MenuItem;
