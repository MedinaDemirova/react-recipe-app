import { useParams } from 'react-router-dom';


function ShowDessert({dessertsRecipes}) {
    const { label } = useParams();

    let current = dessertsRecipes.filter((dessert) => dessert.recipe.label === label);
    current = current[0].recipe || [];

    //  do not load properly when open in another browser???
    return (
        <div className="show-dessert">
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

export default ShowDessert;