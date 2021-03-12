import React from 'react';

function ShowRecipe({ recipe, setShowRecipe }) {
  function setDisplayToNone() {
    setShowRecipe(false);

  }
  return (
    <div className="show-recipe">
      <h1 className="show-recipe-header">{recipe.label}</h1>
      <div className="show-main">
        <div className="show-left">

          <img className="show-recipe-image" src={recipe.image} alt="" />

          <p className="show-recipe-calories">Calories: {(recipe.calories).toFixed(2)}</p>
        </div>
        <div className="show-right">
          <ol className="show-recipe-ingredients">
            {recipe.ingredientLines.map((ingredient) =>
              <li key={ingredient}>{ingredient}</li>
            )}
          </ol>
          <button onClick={setDisplayToNone}>Back to recipes</button>
        </div>
      </div>
    </div>
  )
}

export default ShowRecipe;

