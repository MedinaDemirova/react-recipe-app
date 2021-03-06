import { useParams } from 'react-router-dom';
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { addFavRecipe } from "../../services/firestoreService";

function ShowDessert({ dessertsRecipes }) {

    let [user,] = useContext(UserContext);

    const { label } = useParams();

    let current = dessertsRecipes.filter((dessert) => dessert.recipe.label === label);
    current = current[0].recipe || [];

    async function addToFavsHandler(e) {
        try {
            let data = { label: current.label, image: current.image, calories: current.calories, totalWeight: current.totalWeight, ingredients: current.ingredientLines, creator: user.email };
            await addFavRecipe(data);
            e.target.innerHTML = "Added to favourites";
            e.target.className = "added"
        } catch (err) {
            console.log(err)
        }
    }

    //  do not load properly when open in another browser???
    return (
        <div className="show-dessert">
            <div className="left">
                <img src={current.image} alt="drink" />
            </div>

            <div className="middle">
                <h1>{current.label}</h1>
                <h2> Calories: {current.calories ? current.calories.toFixed(2) : null}</h2>
                <h2>Total weight: {current.totalWeight ? current.totalWeight.toFixed(2) : null}</h2>
                {user.email &&
                    <p onClick={addToFavsHandler} className="show-recipe-calories add-to-favs">Add to favourites</p>}
            </div>

            <ol>
                {current.ingredientLines ? current.ingredientLines.map(
                    ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    )
                ) : null}
            </ol>

        </div>
    )
}

export default ShowDessert;