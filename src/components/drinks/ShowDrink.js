import { useParams } from 'react-router-dom';


function ShowDrink({drinks}) {
    const { label } = useParams();

    let current = drinks.filter((drink) => drink.recipe.label === label);
    current = current[0].recipe || [];

    // TO DO: Use url props to filter drinks and show selected
    // Make CSS separeted for every component
    return (
        <div className="show-drink">
            <div className="left">
                <img src={current.image} alt="drink" />
            </div>

            <div className="middle">
                <h1>{current.label}</h1>
                <h2> Calories: {current.calories ? current.calories.toFixed(2) : null}</h2>
                <h2>Total weight: {current.totalWeight ? current.totalWeight.toFixed(2) : null}</h2>
            </div>

            <ol>
                {current.ingredientLines ? current.ingredientLines.map(
                    ingredient => (
                        <li key={ingredient}>{ingredient}</li>
                    )
                ) : null}
            </ol>
        </div>
    )
}

export default ShowDrink;