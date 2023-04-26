import { Box } from "@mui/material";
import { ActionMenu } from "../../../component/menu/model/menu-model";
import theme from "../../../global-settings/theme-config";
import { StyleProps } from "../../../models/style-props";
import useStylesMainPage from "../../styles/main";

export const DisplayProfile = (props: { activeTheme: ActionMenu }) => {
  const styleProps: StyleProps = { activeTheme: props.activeTheme };

  const classes = useStylesMainPage(styleProps);
  return (
    <Box
      sx={{
        border:
          "2px solid" +
          theme({ activeTheme: props.activeTheme }).palette.primary.main,
      }}
      className={classes.root}
    >
      DisplayProfile
    </Box>
  );
};
