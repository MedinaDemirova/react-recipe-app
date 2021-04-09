import React, { useContext } from 'react';
import Search from './Search';
import { Link } from "react-router-dom";
import ".//Header.css"
import UserContext from '../contexts/UserContext';

function Header({ setQuery, query, search, setSearch, setCounter }) {
    let [user] = useContext(UserContext)
    return (
        <div className="head">
            <div className="header">

                <h1 className="header-main">Grab your dinner recipe! </h1>
                <p className='header-p'> Do you like to cook staying home? Discover your new culinary inspiration for today's meal! </p>
                {!user.email &&
                    <p className="header-p-sec">  <Link to="/auth/register" className="register-link">Register </Link> to create a list of your favourite recipes!  </p>}

            </div>
            <div>
                <Search
                    setQuery={setQuery}
                    search={search}
                    setSearch={setSearch}
                    setCounter={setCounter}
                    query={query}
                />
            </div>

        </div>
    )
}

export default Header;