import { Link } from "react-router-dom";

function Drink({ drink, }) {

    return (

        <div className="drink-card" >
            <Link to={`/drinks/${drink.label}`} >
                <img src={drink.image} alt="drink" />

                <div className="drink-card-label">
                    {drink.label}
                </div>
            </Link>
        </div>

    )
}
export default Drink;