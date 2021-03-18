import { Link } from 'react-router-dom';

function DrinksHeader({setDrinks,drinksCounter,getDrinksData }) {

    function getDrinksFunk(e) {
        e.preventDefault();
        getDrinksData(setDrinks,drinksCounter);
    }

    return (
        <Link to="/drinks" onClick={getDrinksFunk}><div className="drinks-header">

            <div className="drinks-image">
                <img className="drinks-image" src="drinks.png" alt="drinks-image" />
            </div>

            <div className="drinks-header-paragraph">
                <p>Need a drink?</p>
                Get cosy and create a warming feast preparing a special drink for you and your loved ones.
                 </div>
        </div></Link>
    )
}

export default DrinksHeader;