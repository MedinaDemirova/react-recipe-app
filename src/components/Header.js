import React from 'react';
import Search from './Search';
import { Link } from "react-router-dom";

function Header({ user, setQuery, search, setSearch }) {
    return (
        <div className="head">
            <div className="header">
              
                    <h1 className="header-main">Grab your dinner recipe! </h1>
                    <p className='header-p'> Do you like to cook staying home? Discover your new culinary inspiration for today's meal! </p>
                    <p className= "header-p-sec">  <Link to="/auth/register" className= "register-link">Register </Link> to create a list of your favourite recipes!  </p>
             
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