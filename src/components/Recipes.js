import React from 'react';
import Recipe from './Recipe'

function Recipes({ recipes }) {
    return (
        <div className="recipes-list">
            {recipes.map(recipe => (
                <Recipe recipe={recipe.recipe} key={recipe.calories} />
            ))
            }
        </div>
    )
}

export default Recipes;