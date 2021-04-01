import { Link } from "react-router-dom";
import ".//MainMenu.css"

function MainMenu({ user, setUser }) {

    function signUserOut() {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        setUser({});

    }

    return (
        <div className="main-menu">

            <Link to="/"> <div className="main-menu-link home">Home</div></Link>


            <Link to="/" onClick={signUserOut} > <div className="main-menu-link signout">Sign out</div></Link>

            <Link to="/auth/login"> <div className="main-menu-link signin">Sign in</div></Link>


        </div>
    )
}
export default MainMenu;