import {Route} from "react-router-dom";

//Components
import ProfilePage from ".//Profile/ProfilePage";
import Login from ".//Login/Login";
import Register from ".//Register/Register";

function Auth(validatePersonalData){

    return(
        <>
        <Route path= "/auth/my-profile">
        user?
        <ProfilePage /> 
        </Route>

        <Route path="/auth/register">
          <Register />
        </Route>

        <Route path="/auth/login">
          <Login
            validatePersonalData={validatePersonalData}
          />
        </Route>
        </>
    )
}

export default Auth;