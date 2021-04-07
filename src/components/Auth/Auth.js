import {Route} from "react-router-dom";
import {useContext} from "react";

//Components
import ProfilePage from ".//Profile/ProfilePage";
import Login from ".//Login/Login";
import Register from ".//Register/Register";
import UserContext from "../contexts/UserContext";

function Auth(){

  let [user] = useContext(UserContext);

    return(
        <>
        <Route path= "/auth/my-profile">
        <ProfilePage /> 
        </Route>

        <Route path="/auth/register">
          <Register />
        </Route>

        <Route path="/auth/login">
          <Login />
        </Route>
        </>
    )
}

export default Auth;