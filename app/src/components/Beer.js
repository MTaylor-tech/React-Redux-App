import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import { useParams} from "react-router-dom";

import { getBeerById } from "../actions";
import BeerDetails from './BeerDetails';

const Beer = ({ getBeerById, beer, isFetching, error}) => {
  let {beerId} = useParams();

  useEffect(()=>{
    getBeerById(beerId);
  },[beerId, getBeerById]);

  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={()=>getBeerById(beerId)}>Try again</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching your beer now :)</h2>;
  } else if (beer!==undefined && beer!==null) {
    return (
      <BeerDetails beer={beer} />
    );
  } else {
    return (
      <div>
        <p>Something went wrong</p>
        <button onClick={()=>getBeerById(beerId)}>Try again</button>
      </div>
    );
  }
};

// hook up the connect to our store
const mapStateToProps = state => {
  return {
    beer: state.beer,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getBeerById }
)(Beer);
