import React, {useEffect,useState} from 'react';
import {NavLink} from 'react-router-dom';
import { getList } from "../actions";
import { connect } from "react-redux";

function BeerList({ getList, isFetching, error, list}) {
  const [page, setPage] = useState(1);
  const [prev, setPrev] = useState([]);
  const [next, setNext] = useState([2,3,4,5]);

  const goPrev = () => {
    let newNext = [page, ...next.slice(0,next.length-1)];
    setNext(newNext);

    let newPrev = [prev[0]-1, ...prev.slice(0,prev.length-1)];
    if (page<6) {
      newPrev = prev.slice(0,prev.length-1);
    }
    setPrev(newPrev);

    setPage(page-1);
  }

  const goNext = () => {
    let newPrev = [...prev, page];
    if (page>4) {
      newPrev = [...prev.slice(1), page];
    }
    setPrev(newPrev);

    let newNext = [...next.slice(1), next[next.length-1]+1];
    setNext(newNext);

    setPage(page+1);
  }

  const goToPage = (p) => {

    if (p>4) {
      setPrev([p-4,p-3,p-2,p-1]);
    } else if (p>3) {
      setPrev([p-3,p-2,p-1]);
    } else if (p>2) {
      setPrev([p-2,p-1]);
    } else if (p>1) {
      setPrev([p-1]);
    } else {
      setPrev([]);
    }

    setNext([p+1,p+2,p+3,p+4]);

    setPage(p);
  }

  useEffect(()=>{
    getList(page);
  },[page, getList]);

  return (
    <div>
      <h3>Page {page}</h3>
      {prev.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}
      {page>1?<><span className="pagelink" onClick={goPrev}>Prev</span>{' '}|{' '}</>:<></>}
      <span className="pagelink" onClick={goNext}>Next</span>{' '}
      {next.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}

      <div className="beerlist">
        {list.map(beer=>{
          return (
            <div className="beercard">
              <NavLink className="beerlink beerCard" to={`/beer/${beer.id}`}>
                <div>
                  <h2>{beer.name}</h2>
                  <img src={beer.image_url} height='100' alt={beer.name} />
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
  { getList }
)(BeerList);
