import { createTheme, TypeBackground } from "@mui/material";
import { purple, green, red, blue, amber, cyan, grey } from "@mui/material/colors";
import { ActionMenu } from "../component/menu/model/menu-model";
const theme = (props: { activeTheme: ActionMenu }) =>
  createTheme({
    // palette: {
    //   mode: 'light'
    //   // primary: {
    //   //   main: purple[500],
    //   // },
    // },
    palette: {
      mode: (props.activeTheme === ActionMenu.DarkTheme) ? "dark" : "light",
      primary: {
        main: purple[500],
        light: purple[300],
        dark: blue[500],
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: (props.activeTheme !== ActionMenu.DarkTheme) ? "#f8f9fe" : grey[900],
      },
      
    },
  });

export default theme;
