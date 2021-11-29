import React from "react";
import styles from "./Search.module.scss";

const Search = ({ setSearch, updatePageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form
          className={`${styles.search} mb-4 w-100`}
        >
        <div class="input-group">
        <input
            onChange={(e) => {
              updatePageNumber(1);
              setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            className={`${styles.input} input-search-bar`}
            type="text"
          />
          <button
            onClick={searchBtn}
            className={`${styles.btn} btn btn-dark`}
          >
            Search
          </button>
        </div>

        </form>
      </div>
      <div class="col-3"></div>
    </div>
  );
};

export default Search;
