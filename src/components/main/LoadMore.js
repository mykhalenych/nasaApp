import React, { useEffect, useState } from "react";
import { makeStyles, Button, Card, CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  load: {
    marginTop: theme.spacing(2),
  },
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
}));

const LoadMore = ({ photo }) => {
  const classes = useStyles();

  const photoPerPage = 5;
  let arrayForPhoto = [];
  
  const [photoToShow, setPhotoToShow] = useState([]);
  const [count, setCount] = useState(1);
  const loopThroughPosts = (count) => {
    for (
      let i = count * photoPerPage - photoPerPage;
      i < photoPerPage * count;
      i++
    ) {
      if (photo[i] !== undefined) {
        arrayForPhoto.push(photo[i]);
      }
    }
    setPhotoToShow(arrayForPhoto);
  };

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  }, []);
  const handleShowMorePosts = () => {
    setCount((prevCount) => prevCount + 1);
    loopThroughPosts(count);
  };
  console.log(photoToShow);
  return (
    <>
      {photoToShow.map((item) => (
        <Card className={classes.root} key={item.id}>
          <CardMedia
            className={classes.media}
            image={item.img_src}
            title="NASA"
          />
        </Card>
      ))}
      {photoToShow.length >= 5 ? (
        <Button
          className={classes.load}
          onClick={handleShowMorePosts}
          type="button"
          variant="contained"
          color="primary"
          fullWidth
        >
          Load next photo
        </Button>
      ) : null}
    </>
  );
};

export default LoadMore;
