import {Link} from "react-router-dom";

function MainMenu(){
    return(
        <div className="main-menu">
        <Link to="/"> <div className="home-link">Home</div></Link>
        </div>
    )
}
export default MainMenu;