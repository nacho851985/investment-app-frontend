import { FC } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiDrawer from "@mui/material/Drawer";
import {
  Divider,
  IconButton,
  styled,
  Theme,
  CSSObject,
  useTheme,
} from "@mui/material";
import MenuItem from "./models/menu-item-component";
import { ActionMenu } from "../menu/model/menu-model";
import themeOwn from "../../global-settings/theme-config";

const drawerWidth = 320;


const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // background: "transparent",
  overflowX: "hidden",
  background: "red",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme: themes, open }) => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(themes),
    "& .MuiDrawer-paper": openedMixin(themes),
  }),
  ...(!open && {
    ...closedMixin(themes),
    "& .MuiDrawer-paper": closedMixin(themes),
  }),
}));

interface SideBarProps {
  open: boolean;
  setOpenState: (openState: boolean) => void;
  activeTheme: ActionMenu
}

const SideBar: FC<SideBarProps> = ({ open, setOpenState, activeTheme }: SideBarProps) => {
  const classes = useTheme();

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton
          onClick={() => {
            setOpenState(false);
          }}
        >
          {classes.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <MenuItem></MenuItem>
    </Drawer>
  );
};

export default SideBar;
