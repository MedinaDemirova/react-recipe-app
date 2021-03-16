import React from 'react';
import Search from './Search';
import { Link } from "react-router-dom";

function Header({ user, setQuery, search, setSearch }) {
    return (
        <div className="head">
            <div className="header">
                <Link to="/">
                    <h1 className="header-main">Grab your dinner recipe! </h1>
                    <p className='header-p'> Are you homemade dishes lover? Of course you are! Discover your new culinary inspiration for today's meal! </p>
                </Link>
            </div>
            <div>
                <Search
                    setQuery={setQuery}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
        </div>
    )
}

export default Header;