import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import SimpleCard from "../../../component/cards/card";
import { ActionMenu } from "../../../component/menu/model/menu-model";
import theme from "../../../global-settings/theme-config";
import { useFetchBrokerCards } from "../../../hooks/useFetchBrokerCards";
import { StyleProps } from "../../../models/style-props";
import useStylesMainPage from "../../styles/main";


export const Brokers = (props: { activeTheme: ActionMenu }) => {
  const { cardBrokerList } = useFetchBrokerCards(false);
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
      <SimpleCard
        activeTheme={props.activeTheme}
        cardBrokerList={cardBrokerList}
      ></SimpleCard>
    </Box>
  );
};

export default Brokers;
