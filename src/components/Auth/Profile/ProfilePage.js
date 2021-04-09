import UserContext from "../../contexts/UserContext";
import { useContext } from 'react';
import ".//ProfilePage.css"

function ProfilePage() {
    let [user, setUser] = useContext(UserContext)
    return (
        <div className="profile-page">

            <div className="user-info-image">
                <div className="user-info">"Cooking is like love. It should be entered into with abandon or not at all."</div>
                <div className="user-info-sub">Harriet Van Horne</div>
                <div className="profile-picture" > {user.email? user.email.split("@")[0].toUpperCase(): null}</div>
            </div>
            <div className="user-favourites-list"></div>

        </div>
    )
}

export default ProfilePage;