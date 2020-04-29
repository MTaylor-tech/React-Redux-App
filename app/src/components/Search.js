import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

export default function Search () {
  const [searchQuery, setSearchQuery] = useState('');
  const [redirect, setRedirect] = useState(null);
  const [searchMethod, setSearchMethod] = useState('name')

  const submitHandler = (event) => {
    event.preventDefault();
    const modSearch = searchQuery.split(' ').join('_').toLowerCase();
    setRedirect(`/${searchMethod}/${modSearch}`);
  };

  const selectHandler = (event) => {
    setSearchMethod(event.target.value);
  };

  const changeHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  if (redirect !== null) {
    return (
      <Redirect to={redirect} />
    );
  } else {
    return (
      <form onSubmit={submitHandler}>
        <label htmlFor="searchField">Search: </label>
        <input type="text" name="searchField" value={searchQuery} placeholder="Search" onChange={changeHandler} />
        <div className="searchOptions">
          <input type="radio" id="name" name="method" value="name" checked={searchMethod==='name'} onChange={selectHandler} />
          <label for="name">Name</label>
          <input type="radio" id="hops" name="method" value="hops" checked={searchMethod==='hops'} onChange={selectHandler} />
          <label for="hops">Hops</label>
          <input type="radio" id="malt" name="method" value="malt" checked={searchMethod==='malt'} onChange={selectHandler} />
          <label for="malt">Malt</label>
          <input type="radio" id="yeast" name="method" value="yeast" checked={searchMethod==='yeast'} onChange={selectHandler} />
          <label for="yeast">Yeast</label>
        </div>
        <button type="submit">Search</button>
      </form>
    );
  }
}
