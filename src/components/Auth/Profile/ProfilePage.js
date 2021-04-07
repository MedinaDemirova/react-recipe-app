import UserContext from "../../contexts/UserContext";
import {useContext} from 'react';
import ".//ProfilePage.css"

function ProfilePage(){
let [user] = useContext(UserContext)
    return(
        <div className= "profile-page">
        <div className ="user-info">{user? user.email.split('@')[0]:null}</div>

        <div className="user-favourites-list">favorites</div>
        
        </div>
    )
}

export default ProfilePage;