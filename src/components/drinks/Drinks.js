import Drink from "./Drink";
import { Link } from "react-router-dom";

function Drinks({ drinks, setDrinksCounter, drinksCounter, setDrinkToShow }) {

    function loadMoreDrinks(e) {
        setDrinksCounter(Number(drinksCounter) + 12);
        console.log(drinksCounter)
    }


    return (
        <div className="drinks-list">
            {
                drinks.map(drink => (
                    <Drink drink={drink.recipe}
                     key={`${drink.calories}${drink.label}` }
                     setDrinkToShow ={setDrinkToShow}
                     />
                ))
            }

            <div className="drink-card" onClick={loadMoreDrinks}>
                <img src="more.png" alt="" />
                <div className="drink-card-label">
                    Load more drinks..
                </div>

            </div>

        </div>
    )
}

export default Drinks;