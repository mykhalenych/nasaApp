import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "./logo.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center ",
  },
  icon: {
    height: "35%",
    width: "35%",
    display: "block",
    margin: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.header}>
      <Toolbar>
        <Link to="/">
          <img src={logo} className={classes.icon} alt="logo" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
