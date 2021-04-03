import { Link } from "react-router-dom";
import ".//MainMenu.css";
import { auth } from '../../firebase';

function MainMenu({ user, setUser }) {

    function signUserOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        auth.signOut();
        setUser({});

    }

    return (
        <div className="main-menu">

            <Link to="/"> <div className="main-menu-link home">Home</div></Link>

            {user.email && <span className="hello-user">Hello, {user.email.split('@')[0]} </span>}

            {user.email && <Link to="/" onClick={signUserOut} > <div className="main-menu-link signout">Sign out</div></Link>}

            {!user.email && < Link to="/auth/login"> <div className="main-menu-link signin">Sign in</div></Link>}


        </div >
    )
}
export default MainMenu;