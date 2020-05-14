import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { getListByName, getListByHops, getListByMalt, getListByYeast } from "../actions";
import { connect } from "react-redux";

function BeerListSearch({ getListByName, getListByHops, getListByMalt, getListByYeast, isFetching, error, list}) {
  let {beerName, hops, malt, yeast} = useParams();

  useEffect(()=>{
    if (yeast !== undefined) {
      getListByYeast(yeast);
    } else if (hops !== undefined) {
      getListByHops(hops);
    } else if (malt !== undefined) {
      getListByMalt(malt);
    } else {
      getListByName(beerName);
    }
  },[beerName, hops, malt, yeast, getListByName, getListByHops, getListByMalt, getListByYeast]);

  return (
    <div>

      <div className="beerlist">
        {list.map(beer=>{
          return (
            <div className="beercard">
              <NavLink className="beerlink beerCard" to={`/beer/${beer.id}`}>
                <div>
                  <h2>{beer.name}</h2>
                  {beer.image_url!==null?<img src={beer.image_url} height='100' alt={beer.name} />:<></>}
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>
    </div>
  );
}

// hook up the connect to our store
const mapStateToProps = state => {
  return {
    list: state.list,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getListByName, getListByHops, getListByMalt, getListByYeast }
)(BeerListSearch);
