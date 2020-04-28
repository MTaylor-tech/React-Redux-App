import React, {useState} from "react";
import { connect } from "react-redux";

import { getRandomBeer } from "../actions";

const Beer = ({ getRandomBeer, beer, isFetching, error }) => {
  const [showBeerNerdStuff, setShowBeerNerdStuff] = useState(false);

  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getRandomBeer}>Load Random Beer</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a beer now :)</h2>;
  } else if (beer!==undefined && beer!=null) {
    return (
      <div>
        <h2>{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.tagline}</p>
        <p>{beer.description}</p>
        <button onClick={()=>setShowBeerNerdStuff(!showBeerNerdStuff)}>Show Beer Nerd Info</button>
        <button onClick={getRandomBeer}>Load Random Beer</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={getRandomBeer}>Load Random Beer</button>
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
  { getRandomBeer }
)(Beer);
