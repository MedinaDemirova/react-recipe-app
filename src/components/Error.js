import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <h1 className="error">404</h1>
            <h3 className="error">Page Not Faund</h3>
            <img className="error" src="404.png" alt="Page not found" />
            <p className="error">Not Hungry today?!? <Link to="/" className="link">One more chance?</Link> </p>
        </div>
    )
}
export default Error;