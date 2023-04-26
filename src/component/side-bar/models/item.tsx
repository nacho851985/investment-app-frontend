import { useNavigate } from "react-router-dom";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Home";
import { ExpandMenuItem } from "./menu-item";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import React from "react";
import theme from "../../../global-settings/theme-config";
import { ActionMenu } from "../../menu/model/menu-model";

export const Item = (props: {
  item: ExpandMenuItem;
  setSelectedItem: (optionSelected: ExpandMenuItem) => void;
}) => {
  let navigate = useNavigate();
  const [openMenuItem, setOpen] = React.useState(true);

  const HandleOpenMenuItem = () => {
    setOpen((props.item.isOpen = !props.item.isOpen));
  };

  return (
    <>
      {props.item.optionList.length === 0 ? (
        // <></>
        <ListItem
          key={props.item.name}
          disablePadding
          sx={{ display: "block" }}
        >
          <ListItemButton
            selected={props.item.isSelected}
            onClick={() => {
              navigate(props.item.link!);
              props.setSelectedItem(props.item);
            }}
            sx={{
              borderRadius: "12px 12px 12px 12px",
              "&.Mui-selected": {
                background: "transparent",
                border: "1px solid",
                borderColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
                color: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
              },
              "&.Mui-focusVisible": {
                backgroundColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
              },
              ":hover": {
                background: "transparent",
                border: "1px solid",
                borderColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
              },
            }}
          >
            <ListItemIcon
              sx={{
                color: props.item.isSelected
                  ? theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main
                  : "#616161",
              }}
            >
              {props.item.icon}
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                fontSize: 14,
              }}
              primary={props.item.name}
            />
          </ListItemButton>
        </ListItem>
      ) : (
        <>
          <ListItemButton
            onClick={() => HandleOpenMenuItem()}
            sx={{
              "&.Mui-selected": {
                // backgroundColor: theme.palette.primary.light,
                background: "transparent",
                border: "1px solid",
                borderColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
                color: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
              },
            }}
          >
            <ListItemIcon>{props.item.icon}</ListItemIcon>

            <ListItemText
              primaryTypographyProps={{
                fontSize: 14,
              }}
              primary={props.item.name}
            />
            {props.item.isOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          {props.item.optionList.map((option, index: number) => (
            <Collapse
              key={index}
              in={props.item.isOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    pl: 6,
                    borderRadius: "12px 12px 12px 12px",
                    "&.Mui-selected": {
                      // backgroundColor: theme.palette.primary.light,
                      background: "transparent",
                      border: "1px solid",
                      borderColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
                      color: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
                    },
                    "&.Mui-focusVisible": {
                      backgroundColor: theme({ activeTheme:  ActionMenu.DarkTheme}).palette.primary.main,
                    },
                    ":hover": {
                      background: "transparent",
                      border: "1px solid",
                      borderColor: theme({ activeTheme: ActionMenu.DarkTheme}).palette.primary.main,
                    },
                  }}
                  selected={option.isSelected}
                  onClick={() => {
                    navigate(option.link);
                    props.setSelectedItem(option);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: option.isSelected
                        ? theme({ activeTheme: ActionMenu.DarkTheme}).palette.primary.main
                        : "#616161",
                    }}
                  >
                    {option.icon}
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={{
                      fontSize: 14,
                    }}
                    primary={option.name}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </>
      )}
    </>
  );
};

export default Item;
