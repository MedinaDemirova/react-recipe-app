import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import ".//Recipes.css"
import SortRecipes from '..//Recipes/menu/SortRecipes';

function Recipes({ counter, setCounter, query, getData, getDataByCategory, sortRecipes }) {

    const [sortCriteria, setSortCriteria] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [recipes, setRecipes] = useState([]);

    useEffect(() => { getData(setRecipes, query, counter) }, [counter, query]);

    useEffect(() => { sortRecipes(sortCriteria, recipes, setRecipes) }, [sortCriteria]);

    useEffect(() => { getDataByCategory(setRecipes, query, counter, searchCategory) }, [searchCategory]);

    function loadMoreRecipes(e) {
        setCounter(Number(counter + 12));
        setSortCriteria('');
        console.log(counter)
    }

    return (
        <>
            <SortRecipes
                setSortCriteria={setSortCriteria}
                setSearchCategory={setSearchCategory}
            />

            <div className="recipes-list">
                {recipes? recipes.map(recipe => (
                    <Recipe recipe={recipe.recipe} key={`${recipe.recipe.uri}`} /> 
                )):null
                }

                <button
                    className="show-more"
                    onClick={loadMoreRecipes}>
                    Show more</button>
            </div>
        </>
    )
}

export default Recipes;