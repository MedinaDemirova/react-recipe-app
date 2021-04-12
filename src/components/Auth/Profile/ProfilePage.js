import { useContext, useState, useEffect } from 'react';
import ".//ProfilePage.css";
import { Link, Route } from "react-router-dom";
import { getFavRecipes } from "../../../services/firestoreService";
import UserContext from '../../contexts/UserContext';
import Recipe from "../../Recipes/Recipe";

function ProfilePage() {
    let [favs, setFavs] = useState([]);
    let [user,] = useContext(UserContext);

    useEffect(() => { getFavRecipesHandler(); }, [])

    async function getFavRecipesHandler() {
        const recipes = await getFavRecipes(`${localStorage.email}`);
        setFavs(recipes);
    };

    return (
        <div className="profile-page">

            <div className="user-info-image">
                <div className="user-info">"Cooking is like love. It should be entered into with abandon or not at all."</div>
                <div className="user-info-sub">Harriet Van Horne</div>
                <Link to="/auth/my-profile"> <div className="profile-picture" > {user.email ? user.email.split("@")[0].toUpperCase() : null}</div></Link>
            </div>

            <Route path="/auth/my-profile/favourites" favs={favs}>
                {favs.length === 0 &&
                    <div className="user-favourites-list">
                        <div className="fav-info">No recipes added in you favourite list yet.</div>
                        <Link to="/"> <div className="favourites-box second">Find your new best recipe</div></Link>
                    </div>
                }
                {console.log(favs)}
                {favs.length > 0 &&
                    favs.map(fav =>
                        <div className="fav-rec-container">

                            <h3>{fav.label}</h3>
                            <span>Calories: {fav.calories}</span>
                            <span>Weight: {fav.totalWeight}</span>
                            <span>Ingredients:</span>
                            <div>{fav.ingredients}</div>

                        </div>
                    )
                }
            </Route>

            <Route path="/auth/my-profile" exact>
                <div className="user-favourites-list">
                    <Link to="/auth/my-profile/favourites"><div className="favourites-box first">My favourites</div></Link>
                    <Link to="/"> <div className="favourites-box second">Find your new best recipe</div></Link>
                    <Link to="/drinks"> <div className="favourites-box third">Try out new cocktail tonight</div></Link>
                </div>
            </Route>

        </div>
    )
}

export default ProfilePage;