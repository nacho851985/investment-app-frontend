import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { makeStyles } from "@mui/styles";
import theme from "../../global-settings/theme-config";
import { CardBroker } from "../../pages/accounts/models/broker-card";
import { ActionMenu } from "../menu/model/menu-model";

export const SimpleCard = (props: {
  activeTheme: ActionMenu;
  cardBrokerList: CardBroker[];
}) => {
  return (
    <>
      {props.cardBrokerList.map((card, index) => (
        <Card
          sx={{
            width: 300,
            display: "inline-flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20px",
            marginTop: "20px",
          }}
          key={index}
        >
          <Box
            sx={{
              width: "100%",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src={card.image}
              sx={{ width: 120, height: 120 }}
            />
          </Box>
          <CardContent>
            <Stack direction="row" spacing={1}>
              <IconButton aria-label="delete">
                <EmailIcon />
              </IconButton>
              <IconButton aria-label="delete" disabled color="primary">
                <EmailIcon />
              </IconButton>
              <IconButton color="secondary" aria-label="add an alarm">
                <EmailIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <EmailIcon />
              </IconButton>
            </Stack>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <Chip label= {card.title} color="primary" variant="outlined" /> */}
              <Typography
                component="div"
                variant="subtitle1"
                // sx={{ border: "1px solid red" }}
              >
                {card.title}
              </Typography>

              <Button sx={{ marginTop: "10px" }} variant="outlined">
                Primary
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default SimpleCard;
