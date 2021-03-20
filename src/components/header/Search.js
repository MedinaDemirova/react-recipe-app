import React from 'react';

function Search({ setQuery, search, setSearch ,setCounter}) {

    function setSearcher(e) {
        e.preventDefault();
        setSearch(e.target.value);
    }

    function submitSearch(e) {
        e.preventDefault();
        setQuery(search);
        setSearch("");
        setCounter(14);
    }

    return (
        <div className="search-form">
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
        </div>
    )
}
export default Search;