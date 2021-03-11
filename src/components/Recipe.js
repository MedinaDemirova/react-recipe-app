import React, { useState } from 'react';
import ShowRecipe from './ShowRecipe'

function Recipe({ recipe }) {

    const [showRecipe, setShowRecipe] = useState(false);

    function showRecipeFunc() {
        setShowRecipe(true);
    }

    return (
        <div className="recipe">

            <h2 className="recipe-label">{recipe.label}</h2>

            <img className="recipe-image" src={recipe.image} alt="" />

            <p className="recipe-calories">Calories: {(recipe.calories).toFixed(2)}</p>

            <button onClick={showRecipeFunc} className="cook-it">Cook it!</button>

            <div style={{ display: showRecipe ? 'block' : 'none' }} className="show-recipe-window" >
                <ShowRecipe
                    recipe={recipe}
                />
            </div>


        </div>
    )
}

export default Recipe;