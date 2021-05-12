import { removeFavRecipe } from "../../../services/firestoreService";
import UserContext from '../../contexts/UserContext';
import {useContext} from "react"

function Favourites({ favs }) {
    let [user,] = useContext(UserContext);

    const removeRecipeFromFavs = async (user,label) => { await removeFavRecipe(user,label); }

    return (
        <div className="user-favourites">
            {favs.map(fav =>
                <div className="fav-rec-container">
                    <h3>{fav.label}</h3>
                    <span>Calories: {fav.calories.toFixed(2)}  - Weight: {fav.totalWeight.toFixed(2)}</span>
                    <h4 >Ingredients:</h4>
                    <ol>
                        {fav.ingredients.map(product => <li key={Math.random()}>{product}</li>)}
                    </ol>
                    <button onClick={() => { removeRecipeFromFavs(user.email,fav.label) }} className="remove-from-favs">Remove</button>
                </div>
            )}
        </div>
    )

}

export default Favourites;