import UserContext from "../../contexts/UserContext";
import {useContext} from 'react';
import ".//ProfilePage.css"

function ProfilePage(){
let [user,setUser] = useContext(UserContext)
    return(
        <div className= "profile-page">
        <div className ="user-info">Welcome to your favourite recipes list, {user.email? user.email.split('@')[0].toUpperCase():null}!</div>

        <div className="user-favourites-list">favorites</div>
        
        </div>
    )
}

export default ProfilePage;