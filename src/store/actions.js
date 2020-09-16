import * as marsGateways from "./gateways";

export const LOAD_PHOTO = "LOAD_PHOTO";

export const photoListRecieved = (photoList) => {
  return {
    type: LOAD_PHOTO,
    payload: {
      photoList,
    },
  };
};

export const getPhoto = (url) => {
  return function (dispatch) {
    marsGateways
      .fetchNasa(url)
      .then((photoList) => dispatch(photoListRecieved(photoList)));
  };
};
