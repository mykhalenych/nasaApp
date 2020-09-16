import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import { photoListSelector } from "../../store/selector";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoadMore from "./LoadMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  wrap: {
    position: "relative",
  },
  media: {
    height: 600,
    marginTop: theme.spacing(2),
  },
  button: {
    position: "fixed",
    marginTop: theme.spacing(2),
  },
  notfound: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));

const Main = ({ photo }) => {
  const classes = useStyles();

  if (!photo) {
    return (
      <section className={classes.notfound}>
        <div className={classes.text}>Not photo</div>
        <Link to="/">
          <Button type="button" variant="contained" color="primary">
            Back to form
          </Button>
        </Link>
      </section>
    );
  }
  return (
    <section className={classes.wrap}>
      <Link to="/">
        <Button
          type="button"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Back to form
        </Button>
      </Link>

      <LoadMore photo={photo} />
    </section>
  );
};

const mapState = (state) => {
  return {
    photo: photoListSelector(state),
  };
};
export default connect(mapState, null)(Main);
