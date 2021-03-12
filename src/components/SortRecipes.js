import React from 'react';

function SortRecipes({ setSortCriteria }) {

    function sortRecipes(e) {
        e.preventDefault();
        setSortCriteria(e.target.value);
    }

    return (
        <div className="sort-recipes">

            <label  htmlFor="sort-recipes">  Sort:</label>
            <select className="select-sort"
                onChange={sortRecipes}
                name="sort-recipes"
                id="sort-recipes">
                <option value="">Select option</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </div>
    )
}

export default SortRecipes;