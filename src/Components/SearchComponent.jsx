import React, { Fragment, useState } from "react";
import LogoComponent from "./LogoComponent";

const SearchComponent = ({ onTermSubmit }) => {
  let [search, setSearch] = useState({
    term: "",
  });
  let handleChange = e => {
    setSearch({ [e.target.name]: e.target.value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    onTermSubmit(search.term);
  };

  return (
    <Fragment>
      <div className="row my-2">
        <div className="col-md-3 logo">
          <LogoComponent></LogoComponent>
        </div>
        <div className="container col-md-4 ml-4">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="search"
              name="term"
              id="search"
              value={search.term}
              className="form-control"
              placeholder="search"
              onChange={handleChange}
            />
            <button className="btn btn-secondary pl-4 pr-4">
              <i className="far fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchComponent;
