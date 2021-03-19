import { Link } from "react-router-dom";

function Drink({ drink, setDrinkToShow }) {
    
function setDrinkToShowFunc(e){
e.preventDefault();
setDrinkToShow(drink);
}

    return (

        <div className="drink-card" onClick = {setDrinkToShowFunc}>
            <Link to={`/drinks/${drink.label}`} >
                <img src={drink.image} alt="drink-image" />

                <div className="drink-card-label">
                    {drink.label}
                </div>
            </Link>

        </div>

    )
}
export default Drink;