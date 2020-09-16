import { LOAD_PHOTO } from "./actions";

const initialState = {
  photoList: [],
};

export const nasaReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PHOTO: {
      return {
        ...state,
        photoList: action.payload.photoList,
      };
    }

    default:
      return state;
  }
};
