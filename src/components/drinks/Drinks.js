import Drink from "./Drink";

function Drinks({ drinks }) {
    return (
        <div className="drinks-list">
            {
                drinks.map(drink => (
                    <Drink drink={drink.recipe} key={drink.calories} />
                ))
            }
        </div>
    )
}

export default Drinks;