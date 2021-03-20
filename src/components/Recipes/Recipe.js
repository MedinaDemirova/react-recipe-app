import React, { useState } from 'react';
import ShowRecipe from './ShowRecipe';
import { Link } from "react-router-dom";

function Recipe({ recipe }) {

    const [showRecipe, setShowRecipe] = useState(false);

    function showRecipeFunc() {
        setShowRecipe(true);
    }

    return (

        <div className="recipe">

            <h2 className="recipe-label">{recipe.label}</h2>

            <img className="recipe-image" src={recipe.image} alt="recipe" />

           
            <button onClick={showRecipeFunc} className="cook-it">Cook it!</button>
           

            <div style={{ display: showRecipe ? 'block' : 'none' }} className="show-recipe-window" >
                <ShowRecipe
                key={recipe.uri || Math.random()}
                    setShowRecipe={setShowRecipe}
                    recipe={recipe}
                />
            </div>

        </div>
    )
}

export default Recipe;