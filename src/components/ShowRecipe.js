import React from 'react';
import Ingredients from './Ingredients';

function ShowRecipe({ recipe }) {
  return (
    <div className="show-recipe">
      <h1 className="show-recipe-header">{recipe.label}</h1>
      <img className="show-recipe-image" src={recipe.image} alt="" />

      <p className="show-recipe-calories">Calories: {(recipe.calories).toFixed(2)}</p>
      <ol className="show-recipe-ingredients">
        {recipe.ingredients.map((ingredient) => {
           <Ingredients ingredients={ingredient} key={recipe.calories} />
        }
        )}
      </ol>
    </div>
  )
}

export default ShowRecipe;

