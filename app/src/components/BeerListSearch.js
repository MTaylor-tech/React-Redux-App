import React, {useEffect} from 'react';
import {NavLink, useParams} from 'react-router-dom';
import { getListByName, getListByHops } from "../actions";
import { connect } from "react-redux";

function BeerListSearch({ getListByName, getListByHops, isFetching, error, list}) {
  let {beerName, hops} = useParams();

  useEffect(()=>{
    console.log(beerName);
    console.log(hops);
    if (beerName !== undefined) {
      getListByName(beerName);
    } else {
      getListByHops(hops);
    }
  },[beerName, hops, getListByName, getListByHops]);

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
  { getListByName, getListByHops }
)(BeerListSearch);
