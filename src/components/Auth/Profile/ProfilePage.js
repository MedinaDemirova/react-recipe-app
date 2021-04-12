import UserContext from "../../contexts/UserContext";
import { useContext } from 'react';
import ".//ProfilePage.css";
import { Link, Route } from "react-router-dom";


function ProfilePage() {
    let [user, setUser] = useContext(UserContext);

    function getFavRecipes() {

    }
    return (
        <div className="profile-page">

            <div className="user-info-image">
                <div className="user-info">"Cooking is like love. It should be entered into with abandon or not at all."</div>
                <div className="user-info-sub">Harriet Van Horne</div>
               <Link to="/auth/my-profile"> <div className="profile-picture" > {user.email ? user.email.split("@")[0].toUpperCase() : null}</div></Link>
            </div>

            <Route path="/auth/my-profile/favourites">
            <div className="user-favourites-list">Fav</div>
            </Route>

            <Route path="/auth/my-profile" exact>
                <div className="user-favourites-list">
                    <Link to="/auth/my-profile/favourites"><div onClick={getFavRecipes} className="favourites-box first">My favourites</div></Link>
                    <Link to="/"> <div className="favourites-box second">Find your new best recipe</div></Link>
                    <Link to="/drinks"> <div className="favourites-box third">Try out new cocktail tonight</div></Link>
                </div>
            </Route>

        </div>
    )
}

export default ProfilePage;