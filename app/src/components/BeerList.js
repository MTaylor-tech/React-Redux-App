import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { getList} from "../actions";
import { connect } from "react-redux";
import {useLocalStorage} from "../hooks/useLocalStorage";

function BeerList({ getList, isFetching, error, list}) {

  const [page, setPage] = useLocalStorage("beerpage",1);
  const [prev, setPrev] = useLocalStorage("beerprev",[]);
  const [next, setNext] = useLocalStorage("beernext",[2,3,4,5]);

  const goPrev = () => {
    let newNext = [page, ...next];
    if (page<10) {
      newNext = [page, ...next.slice(0,next.length-1)];
    }
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
    if (page>8) {
      newNext = [...next.slice(1)];
    }
    setNext(newNext);

    setPage(page+1);
  }

  const goToPage = (p) => {
    if (p>4) {
      setPrev([p-4,p-3,p-2,p-1]);
    } else if (p>3) {
      setPrev([1,2,3]);
    } else if (p>2) {
      setPrev([1,2]);
    } else if (p>1) {
      setPrev([1]);
    } else {
      setPrev([]);
    }

    if (p>12) {
      setNext([]);
    } else if (p>11) {
      setNext([13]);
    } else if (p>10) {
      setNext([12,13]);
    } else if (p>9) {
      setNext([11,12,13]);
    } else {
      setNext([p+1,p+2,p+3,p+4]);
    }

    setPage(p);
  }

  useEffect(()=>{
    getList(page);
  },[page, getList]);

  return (
    <div>
      <h3 className="pagehead">Page {page}</h3>
      <nav>
        {prev.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}
        {page>1?<><span className="pagelink" onClick={goPrev}>Prev</span></>:<></>}
        {page>1&&page<13?<>{' '}|{' '}</>:<></>}
        {page<13?<><span className="pagelink" onClick={goNext}>Next</span>{' '}</>:<></>}
        {next.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}
      </nav>

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

      <nav>
        {prev.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}
        {page>1?<><span className="pagelink" onClick={goPrev}>Prev</span></>:<></>}
        {page>1&&page<13?<>{' '}|{' '}</>:<></>}
        {page<13?<><span className="pagelink" onClick={goNext}>Next</span>{' '}</>:<></>}
        {next.map(n=><><span className="pagelink" onClick={()=>goToPage(n)}>{n}</span>{' '}</>)}
      </nav>
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
