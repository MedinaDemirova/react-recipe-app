import React from 'react';

function SearchByMeal({ setMealQuery }) {

    function setMealQueryFunc(e) {
        e.preventDefault();
        setMealQuery(e.target.value);
    }

    return (
        <div className="search-by-meal">

            <label htmlFor="search-by-meal">Select meal:</label>
            <select
                onChange={setMealQueryFunc}
                name="search-by-meal"
                id="search-by-meal">
                <option selected value="">All</option>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option  value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
                <option value="Teatime">Teatime</option>

            </select>
        </div>
    )
}
export default SearchByMeal;
