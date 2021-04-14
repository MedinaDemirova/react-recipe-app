import { addFavRecipe} from "../../services/firestoreService";
import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";


function ShowRecipe({ recipe, setShowRecipe }) {

  let [user,] = useContext(UserContext);

  function setDisplayToNone() {
    setShowRecipe(false);
  }

  async function addToFavsHandler(e) {
    try {
      let data = { label: recipe.label, image: recipe.image, calories: recipe.calories, totalWeight: recipe.totalWeight, ingredients: recipe.ingredientLines, creator: user.email };
      await addFavRecipe(data);
      e.target.innerHTML = "Added to favourites";
      e.target.className = "added"
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="show-recipe">
      <h1 className="show-recipe-header">{recipe.label}
      </h1>
      <div className="show-main">
        <div className="show-left">
          <img className="show-recipe-image" src={recipe.image} alt="recipe" />
          {user.email &&
            <p onClick={addToFavsHandler} className="show-recipe-calories add-to-favs">Add to favourites</p>}
          <p className="show-recipe-calories">  Calories: {(recipe.calories).toFixed(2)}</p>
          <p className="show-recipe-wigth">  Total weight: {(recipe.totalWeight).toFixed(2)}</p>
          <button className="back-to-rec" onClick={setDisplayToNone}>Cancel</button>

        </div>
        <div className="show-right">
          <ol className="show-recipe-ingredients-ol">
            {recipe.ingredientLines.map((ingredient) =>
              <li className="show-recipe-ingredients" key={ingredient + Math.random()}>{ingredient} </li>
            )}
          </ol>

        </div>

      </div>

    </div>
  )
}

export default ShowRecipe;

