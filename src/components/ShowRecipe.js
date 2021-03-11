import React from 'react';

function ShowRecipe({ recipe, setShowRecipe }) {
  function setDisplayToNone(){
      setShowRecipe(false);
  
  }
  return (
    <div className="show-recipe">
      <h1 className="show-recipe-header">{recipe.label}</h1>
      <img className="show-recipe-image" src={recipe.image} alt="" />

      <p className="show-recipe-calories">Calories: {(recipe.calories).toFixed(2)}</p>
      <ol className="show-recipe-ingredients">
        {recipe.ingredientLines.map((ingredient) =>
          <li>{ingredient}</li>
        )}
      </ol>
      <button onClick = {setDisplayToNone}>Back to recipes</button>
    </div>
  )
}

export default ShowRecipe;

