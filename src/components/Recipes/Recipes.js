import React from 'react';
import Recipe from './Recipe'


function Recipes({ recipes, counter, setCounter,setSortCriteria }) {

    function loadMoreRecipes(e) {
        setCounter(Number(counter +  14));
        setSortCriteria('');
        console.log (counter)
    }

    return (
        <div className="recipes-list">
            {recipes.map(recipe => (
                <Recipe recipe={recipe.recipe} key={`${recipe.recipe.calories}`} />
            ))
            }

            <button
                className="show-more"
                onClick={loadMoreRecipes}>
                Show more</button>
        </div>
    )
}

export default Recipes;