import { FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Avatar,
  Box,
  IconButton,
  styled,
  Toolbar,
} from "@mui/material";
import MenuControl from "../menu/menu";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import { ActionMenu, MenuModel, OptionMenu } from "../menu/model/menu-model";
import perfil from "../../assets/perfil.jpg";
import { Logout, Settings } from "@mui/icons-material";
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import theme from "../../global-settings/theme-config";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  height: 60,
  // Override media queries injected by theme.mixins.toolbar
  // '@media all': {
  //   innerHeight: 30,
  // },
}));

const drawerWidth = 320;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface NavBarProps {
  open: boolean;
  activeTheme: ActionMenu;
  setOpenState: (openState: boolean) => void;
  setThemeState: (themeState: ActionMenu) => void;
}

const NavBar: FC<NavBarProps> = ({
  open,
  activeTheme,
  setOpenState,
  setThemeState,
}: NavBarProps) => {

  const themeMenu: OptionMenu = {
    title: "theme",
    icon:  <IconButton sx={{ color: theme({ activeTheme: ActionMenu.DarkTheme}).palette.primary.light}}><FormatColorFillIcon /></IconButton>,
  };

  const themeArrayOption: OptionMenu[] = [
    {
      title: ActionMenu.LightTheme,
      icon: <FormatColorFillIcon fontSize="small" />,
    },
    {
      title: ActionMenu.DarkTheme,
      icon: <FormatColorFillIcon fontSize="small" />,
    },
  ];

  const themes = new MenuModel(themeMenu, themeArrayOption);


  const accountMenu: OptionMenu = {
    title: "theme",
    icon: <Avatar src={perfil} sx={{ width: 32, height: 32 }}></Avatar>,
  };

  const accountArrayOption: OptionMenu[] = [
    {
      title: ActionMenu.ProfileView,
      icon: <Avatar />,
    },
    {
      title: ActionMenu.MyAccount,
      icon: <Avatar />,
    },
    {
      title: ActionMenu.Settings,
      icon: <Settings fontSize="small" />,
    },
    {
      title: ActionMenu.Logout,
      icon: <Logout fontSize="small" />,
    },
  ];


  const account = new MenuModel(accountMenu, accountArrayOption);

  const selectedItem = (optionSelected: ActionMenu) => {
    setThemeState(optionSelected)
  } 

  return (
    <AppBar color="primary" position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            setOpenState(true);
          }}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton color="inherit" aria-label="open drawer">
          <AspectRatioIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <MenuControl menu={themes} setSelectedItem={selectedItem}></MenuControl>
          <MenuControl menu={account} setSelectedItem={selectedItem}></MenuControl>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
