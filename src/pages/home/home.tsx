import { Theme } from "@mui/material";
import React, { FC } from "react";
import { makeStyles } from "@mui/styles";
import Jerome from "../../assets/powell.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    height: window.innerHeight - 100,
  },
  graphics: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "50%",
  },
  card: {
    width: "50%",
    marginTop: "20px",
    borderRadius: "8px 8px 8px 8px"
    // height: "300px",
  },
  powell: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "50%",
    margin: "0 auto",
  },
  image: {
    width: "100%",
  }
}));

interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const classes = useStyles();

  return (
    <div data-testid="Home" className={classes.root}>
      <div className={classes.powell}>
        <img className={classes.image} src={Jerome} alt="green iguana" />
      </div>
    </div>
  );
};

export default Home;
