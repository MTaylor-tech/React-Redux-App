import axios from "axios";

export const FETCHING_BEER_START = "FETCHING_BEER_START";
export const FETCHING_BEER_SUCCESS = "FETCHING_BEER_SUCCESS";
export const FETCHING_BEER_FAILURE = "FETCHING_BEER_FAILURE";
export const FETCHING_LIST_START = "FETCHING_LIST_START";
export const FETCHING_LIST_SUCCESS = "FETCHING_LIST_SUCCESS";
export const FETCHING_LIST_FAILURE = "FETCHING_LIST_FAILURE";

export const getRandomBeer = () => async dispatch => {
  dispatch({ type: FETCHING_BEER_START, payload: 'random' });

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

export const getBeerById = (beerId) => async dispatch => {
  dispatch({ type: FETCHING_BEER_START, payload: beerId });
  console.log(`Fetching ${beerId}`);
  // implement the code calling actions for .then and .catch
  axios
    .get(`https://api.punkapi.com/v2/beers/${beerId}`)
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

export const getList = (page) => async dispatch => {
  dispatch({ type: FETCHING_LIST_START, payload: page });
  console.log(`Fetching page ${page}`);
  axios
    .get(`https://api.punkapi.com/v2/beers?page=${page}`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};

export const getListByName = (name) => async dispatch => {
  dispatch({ type: FETCHING_LIST_START, payload: 1 });
  console.log(`Fetching beers by name: ${name}`);
  axios
    .get(`https://api.punkapi.com/v2/beers?beer_name=${name}&per_page=80`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};

export const getListByHops = (hops) => async dispatch => {
  dispatch({ type: FETCHING_LIST_START, payload: 1 });
  console.log(`Fetching beers by hops: ${hops}`);
  axios
    .get(`https://api.punkapi.com/v2/beers?hops=${hops}&per_page=80`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};

export const getListByMalt = (malt) => async dispatch => {
  dispatch({ type: FETCHING_LIST_START, payload: 1 });
  console.log(`Fetching beers by malt: ${malt}`);
  axios
    .get(`https://api.punkapi.com/v2/beers?malt=${malt}&per_page=80`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};

export const getListByYeast = (yeast) => async dispatch => {
  dispatch({ type: FETCHING_LIST_START, payload: 1 });
  console.log(`Fetching beers by yeast: ${yeast}`);
  axios
    .get(`https://api.punkapi.com/v2/beers?yeast=${yeast}&per_page=80`)
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_LIST_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};
