import React from 'react';
import { Link } from "react-router-dom";

import Dropdownmenu from "./dropdownmenu/Dropdownmenu";
import ".//SortRecipes.css";

function SortRecipes({ setSortCriteria, setSearchCategory }) {

    function sortRecipes(e) {
        e.preventDefault();
        setSortCriteria(e.target.value);
    }

    return (
        <div className="sort-recipes">
            <Link to="/"> <div className="home-link">Home</div></Link>
           
            <Dropdownmenu  
            setSearchCategory= {setSearchCategory}
            />
               
            <select className="select-sort"
                onChange={sortRecipes}
                name="sort-recipes"
                id="sort-recipes">
                <option value="">Sort option</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )
}

export default SortRecipes;