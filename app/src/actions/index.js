import axios from "axios";

export const FETCHING_BEER_START = "FETCHING_BEER_START";
export const FETCHING_BEER_SUCCESS = "FETCHING_BEER_SUCCESS";
export const FETCHING_BEER_FAILURE = "FETCHING_BEER_FAILURE";

export const getRandomBeer = () => dispatch => {
  dispatch({ type: FETCHING_BEER_START });

  // implement the code calling actions for .then and .catch
  axios
    .get("https://api.punkapi.com/v2/beers/random")
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_BEER_SUCCESS, payload: res.data[0] });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_BEER_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};
