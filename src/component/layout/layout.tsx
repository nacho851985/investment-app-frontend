import * as React from "react";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { FC } from "react";
import { AppRoutes } from "../../AppRoutes";
import NavBar from "../nav-bar/nav-bar";
import SideBar from "../side-bar/side-bar";
import { purple, green, red, blue, yellow } from "@mui/material/colors";
import theme from "../../global-settings/theme-config";
import { ActionMenu } from "../menu/model/menu-model";
import { Paper } from "@mui/material";
import { Height } from "@mui/icons-material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const [open, setOpen] = React.useState(true);
  const [activeTheme, setActiveTheme] = React.useState(ActionMenu.LightTheme);

  const handleState = (isOpen: boolean) => {
    isOpen ? setOpen(true) : setOpen(false);
  };

  const handleTheme = (activeTheme: ActionMenu) => {
    setActiveTheme(activeTheme);
  };

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       main: purple[500],
  //       dark: purple[400]
  //     },
  //     secondary: {
  //       main: green[500],
  //     },
  //   },
  //   // components: {
  //   //   MuiCssBaseline: {
  //   //     styleOverrides: {
  //   //       body: {
  //   //         background: "radial-gradient(circle at 85.4% 50.8%, rgb(14, 72, 222) 0%, rgb(3, 22, 65) 74.2%)",
  //   //         backgroundRepeat: "no-repeat",
  //   //         backgroundAttachment: "fixed",
  //   //       },
  //   //     },
  //   //   },
  //   // },
  //   // palette: {
  //   //   // background: {
  //   //   //   default: darkMode
  //   //   //     ? "radial-gradient(circle at 74.2% 50.9%, rgb(14, 72, 222) 5.2%, rgb(3, 22, 65) 75.3%)"
  //   //   //     : "green",
  //   //   // },
  //   //   mode: darkMode ? "dark" : "light",
  //   //   // primary: {
  //   //   //   main: purple[500],
  //   //   // },
  //   // },
  // });

  return (
    <ThemeProvider theme={theme({ activeTheme: activeTheme })}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <NavBar
          open={open}
          activeTheme={activeTheme}
          setOpenState={handleState}
          setThemeState={handleTheme}
        ></NavBar>
        <SideBar
          open={open}
          setOpenState={handleState}
          activeTheme={activeTheme}
        ></SideBar>
        <Box
          sx={{
            background: theme({ activeTheme: activeTheme }).palette.background
              .default,
            height: window.innerHeight - 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <DrawerHeader /> */}
          <AppRoutes activeTheme={activeTheme}></AppRoutes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
