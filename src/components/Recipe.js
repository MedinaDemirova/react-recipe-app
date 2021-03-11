import React from 'react';


function Recipe({ recipe }) {
    return (
        <div className="recipe">

            <h2 className="recipe-label">{recipe.label}</h2>
            
            <img className="recipe-image" src={recipe.image} alt="" />

            <p className="recipe-calories">Calories: {(recipe.calories).toFixed(2)}</p>

        </div>
    )
}

export default Recipe;