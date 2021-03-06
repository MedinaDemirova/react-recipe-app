import { Link } from 'react-router-dom';

function DrinksHeader() {

    return (
        <Link to="/drinks"><div className="drinks-header">

            <div className="drinks-image">
                <img className="drinks-image" src="drinks.png" alt="drinks" />
            </div>

            <div className="drinks-header-paragraph">
                <p>Need a drink?</p>
                Get cosy and create a warming feast preparing a special drink for you and your loved ones.
                <button className= "get-drinks-btn">Get drinks</button>
                 </div>
        </div></Link>
    )
}

export default DrinksHeader;