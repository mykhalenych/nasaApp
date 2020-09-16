import React, { useState } from "react";
import {
  Select,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Container,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { API_KEY } from "../../store/gateways";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: "linear-gradient(45deg, #f3e5f5 5%, #9c27b0 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  link: {
    textDecoration: "none",
  },
}));

const Form = ({ getPhotoList }) => {
  const classes = useStyles();

  const [camera, setCamera] = useState("");
  const [rover, setRover] = useState("");
  const [sol, setSol] = useState("");
  const [redirect, setRedirect] = useState(false);

  const cameraChange = (event) => {
    setCamera(event.target.value);
  };
  const roverChange = (event) => {
    setRover(event.target.value);
  };
  const solChange = (event) => {
    setSol(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getPhotoList(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`
    );
    setRedirect(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Chouse query params
        </Typography>
        <form
          className={classes.form}
          onSubmit={(event) => handleSubmit(event)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">
                  Camera
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  required={true}
                  value={camera}
                  onChange={(event) => cameraChange(event)}
                >
                  <MenuItem value={"FHAZ"}>Front Camera</MenuItem>
                  <MenuItem value={"RHAZ"}>Rear Camera</MenuItem>
                  <MenuItem value={"NAVCAM"}>Navigation Camera</MenuItem>
                </Select>
                <FormHelperText>Chose camera</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required={true}
                fullWidth
                name="sol"
                label="Mars day"
                type="number"
                id="sol"
                InputProps={{ inputProps: { min: 0, max: 1000 } }}
                onChange={(event) => solChange(event)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Rover</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required={true}
                  value={rover}
                  onChange={(event) => roverChange(event)}
                >
                  <MenuItem value={"curiosity"}>Curiosity</MenuItem>
                  <MenuItem value={"opportunity"}>Opportunity</MenuItem>
                  <MenuItem value={"Spirit"}>Spirit</MenuItem>
                </Select>
                <FormHelperText>Chose rover</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          {redirect === true ? (
            <Link to="/main" className={classes.link}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.button}
              >
                Show photo
              </Button>
            </Link>
          ) : (
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          )}
        </form>
      </div>
    </Container>
  );
};
const mapDispatch = {
  getPhotoList: actions.getPhoto,
};

export default connect(null, mapDispatch)(Form);
