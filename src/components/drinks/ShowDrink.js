function ShowDrink({ drinkToShow }) {
    return (
        <div className="show-drink">
            <div className="left">
                <img src={drinkToShow.image} alt="drink-image" />
            </div>

            <div className="middle">
                <h1>{drinkToShow.label}</h1>
                <h2> Calories: {drinkToShow.calories.toFixed(2)}</h2>
                <h2>Total weight: {drinkToShow.totalWeight.toFixed(2)}</h2>
            </div>
           
                <ol>
                    {drinkToShow.ingredientLines.map(
                        ingredient => (
                            <li>{ingredient}</li>
                        )
                    )}
                </ol>
        </div>
    )
}

export default ShowDrink;