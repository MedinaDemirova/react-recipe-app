import React, {useState} from 'react';

function Search({ setQuery,  query, setCounter }) {

    const [search, setSearch] = useState("");

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
                    type="text"
                    placeholder={query}
                />
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