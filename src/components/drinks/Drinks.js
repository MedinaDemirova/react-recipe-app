import Drink from "./Drink";

function Drinks({ drinks, setDrinksCounter, drinksCounter }) {

    function loadMoreDrinks(e) {
        setDrinksCounter(Number(drinksCounter) + 12);
        console.log(drinksCounter)
    }


    return (
        <div className="drinks-list">
            {
                drinks.map(drink => (
                    <Drink drink={drink.recipe}
                     key={`${drink.uri}`+Math.random() }
                     />
                ))
            }

            <div className="drink-card" onClick={loadMoreDrinks}>
                <img src="more.png" alt="more" />
                <div className="drink-card-label">
                </div>

            </div>

        </div>
    )
}

export default Drinks;