import {
  FETCHING_BEER_START,
  FETCHING_BEER_SUCCESS,
  FETCHING_BEER_FAILURE,
  FETCHING_LIST_START,
  FETCHING_LIST_SUCCESS,
  FETCHING_LIST_FAILURE,
} from "../actions";

const initialState = {
  page: 1,
  beer_id: 'random',
  beer: null,
  isFetching: false,
  error: "",
  list: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BEER_START:
      return {
        ...state,
        beer_id: action.payload || 'random',
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
        error: action.payload
      };
    case FETCHING_LIST_START:
      return {
        ...state,
        page: action.payload,
        isFetching: true,
      };
    case FETCHING_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        list: action.payload
      };
    case FETCHING_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
