import {
  FETCHING_BEER_START,
  FETCHING_BEER_SUCCESS,
  FETCHING_BEER_FAILURE
} from "../actions";

const initialState = {
  beer: null,
  isFetching: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BEER_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_BEER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        beer: action.payload
      };
    case FETCHING_BEER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: "There was an error."
      };
    default:
      return state;
  }
};
