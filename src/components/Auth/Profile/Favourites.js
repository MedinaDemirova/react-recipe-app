function Favourites({ favs }) {

    return (
        <div className="user-favourites">
            {favs.map(fav =>
                <div className="fav-rec-container">
                    <h3>{fav.label}</h3>
                    <span>Calories: {fav.calories.toFixed(2)}  - Weight: {fav.totalWeight.toFixed(2)}</span>
                    <h4 >Ingredients:</h4>
                    <ol>
                        {fav.ingredients.map(product => <li key= {product}>{product}</li>)}
                    </ol>
                </div>
            )}
        </div>
    )

}

export default Favourites;