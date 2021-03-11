import React from 'react';


function SearchByType({ setTypeQuery }) {

    function setTypeQueryFunc(e) {
        e.preventDefault();
        setTypeQuery(e.target.value);

    }
    return (
        <div className="search-by-type">
            <label htmlFor="search-by-type">Select type:</label>
            <select
                onChange={setTypeQueryFunc}
                name="search-by-type" id="search-by-type">
                <option selected value="">All</option>
                <option value="Alcohol-cocktail">Alcohol-cocktail</option>
                <option value="Biscuits and cookies">Biscuits and cookies</option>
                <option value="Bread">Bread</option>
                <option value="Cereals">Cereals</option>
                <option value="Condiments and sauces">Condiments and sauces</option>
                <option value="Drinks">Drinks</option>
                <option value="Desserts">Desserts</option>
                <option value="Egg">Egg</option>
                <option value="Main course">Main course</option>
                <option value="Omelet">Omelet</option>
                <option value="Pancake">Pancake</option>
                <option value="Preps">Preps</option>
                <option value="Preserve">Preserve</option>
                <option value="Salad">Salad</option>
                <option value="Sandwiches">Sandwiches</option>
                <option value="Soup">Soup</option>
                <option value="Starter">Starter</option>

            </select>
        </div>
    )
}
export default SearchByType;
