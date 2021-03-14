import React from 'react';

function ShowRecipe({ recipe, setShowRecipe }) {
  function setDisplayToNone() {
    setShowRecipe(false);

  }
  return (
    <div className="show-recipe">
      <h1 className="show-recipe-header">{recipe.label}
      </h1>
      <div className="show-main">
        <div className="show-left">
          <img className="show-recipe-image" src={recipe.image} alt="" />
          <p className="show-recipe-calories">  Calories: {(recipe.calories).toFixed(2)}</p>
          <p className="show-recipe-wigth">  Total weight: {(recipe.totalWeight).toFixed(2)}</p>
          <button className="back-to-rec" onClick={setDisplayToNone}>Cancel</button>
        </div>
        <div className="show-right">
          <ol className="show-recipe-ingredients-ol">
            {recipe.ingredientLines.map((ingredient) =>
              <li className="show-recipe-ingredients" key={ingredient}>{ingredient} </li>
            )}
          </ol>
         
        </div>
        
      </div>
    
    </div>
  )
}

export default ShowRecipe;

