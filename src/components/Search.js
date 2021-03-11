import React from 'react';

function Search({ query, setQuery, search, setSearch }) {

    function setSearcher(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function submitSearch(e) {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    return (
        <form
            onSubmit={submitSearch}
            className="searh-form" >
            <input
                onChange={setSearcher}
                className="search-input"
                type="text" />
            <button
                className="search-button"
                type="submit">
                Search
            </button>
        </form >
    )
}
export default Search;