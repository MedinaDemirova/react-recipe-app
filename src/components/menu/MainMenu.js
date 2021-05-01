import { Link } from "react-router-dom";
import { useContext } from 'react';
import ".//MainMenu.css";
import { auth } from '../../firebase';
import UserContext from "../contexts/UserContext";
import Time from "../menu/Time.js";

function MainMenu() {

    const [user, setUser] = useContext(UserContext);

    function signUserOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        auth.signOut();
        setUser({});
    }

    return (
        <div className="main-menu">

            <Link to="/"> <div className="main-menu-link home">Home</div></Link>

            <Time />

            <Link to="/auth/my-profile">  {user.email && <span className="hello-user">Hello, {user.email.split('@')[0]} </span>}</Link>

            {user.email && <Link to="/" onClick={signUserOut} > <div className="main-menu-link signout">Sign out</div></Link>}

            {!user.email && < Link to="/auth/login"> <div className="main-menu-link signin">Sign in</div></Link>}

        </div >
    )
}
export default MainMenu;