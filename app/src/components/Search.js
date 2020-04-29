import React, {useState} from 'react';
import { Redirect } from "react-router-dom";

export default function Search () {
  const [searchQuery, setSearchQuery] = useState('');
  const [redirect, setRedirect] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    const modSearch = searchQuery.split(' ').join('_');
    setRedirect(`/name/${modSearch}`);
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
        <button type="submit">Search</button>
      </form>
    );
  }
}
