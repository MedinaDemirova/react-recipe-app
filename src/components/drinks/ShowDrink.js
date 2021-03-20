function ShowDrink({ drinkToShow, match }) {

    // TO DO: Make new request to database for selected drink (match) and then render  response in this component 
    // Make CSS separeted for every component
    // Fix keys to clear the errors from the console

    return (
        <div className="show-drink">
            <div className="left">
                <img src={drinkToShow.image} alt="drink" />
            </div>

            <div className="middle">
                <h1>{drinkToShow.label}</h1>
                <h2> Calories: {drinkToShow.calories ? drinkToShow.calories.toFixed(2) : null}</h2>
                <h2>Total weight: {drinkToShow.totalWeight ? drinkToShow.totalWeight.toFixed(2) : null}</h2>
            </div>

            <ol>
                {drinkToShow.ingredientLines ? drinkToShow.ingredientLines.map(
                    ingredient => (
                        <li>{ingredient}</li>
                    )
                ) : null}
            </ol>
        </div>
    )
}

export default ShowDrink;