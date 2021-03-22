import Dessert from "./Dessert";

function DessertsList({ dessertsRecipes, setDessertsCounter, dessertsCounter }) {
 
    function loadMoreDesserts(e) {
        setDessertsCounter(Number(dessertsCounter) + 15);
        console.log(dessertsCounter)
    }

    return (
        <div className="dessert-list-container" style={{ display: "none" }}
            id="dessert-list">
            {
                dessertsRecipes.map(dessert => (
                    <Dessert dessert={dessert.recipe} 
                        key={`${dessert.uri}` + Math.random()}
                    />
                ))
            }

            <div className="dessert-card" onClick={loadMoreDesserts}>
                <img src="more.png" alt="more" />
                <div className="dessert-card-label">
                </div>

            </div>

        </div>
    )
}

export default DessertsList;