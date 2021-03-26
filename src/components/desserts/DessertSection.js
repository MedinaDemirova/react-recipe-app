import ".//Desserts.css";
import { useEffect, useState } from 'react';
import DessertsList from "./DessertsList";
import ShowDessert from "./ShowDessert";
import { Route, Link } from "react-router-dom";
import {getDesserts} from "../../services/getData";

function DessertSection() {

    const [dessertQuery, setDessertQuery] = useState('');
    const [dessertsRecipes, setDessertsRecipes] = useState([]);
    const [dessertsCounter, setDessertsCounter] = useState(15);

    useEffect(() => { getDesserts(setDessertsRecipes, dessertQuery, dessertsCounter) }, [dessertsCounter, dessertQuery]);

    function getDessertsRecipes(e) {
        setDessertQuery(e.target.innerText)
        document.getElementById("dessert-list").style.display = "flex";

    }

    return (

        <>
            <Link to="/desserts">
                <div className="dessert-section">
                    <div className="dessert-section-image">
                        <img src="desserts.jpg" alt="dessert" />
                        < p onClick={getDessertsRecipes}>Cakes</p>
                    </div>
                    <div className="dessert-section-image">
                        <img src="icecream.jpg" alt="dessert" />
                        <p onClick={getDessertsRecipes}>Ice Cream</p>
                    </div>
                    <div className="dessert-section-image">
                        <img src="cupcakes.jpg" alt="dessert" />
                        <p onClick={getDessertsRecipes}>Cupcakes</p>
                    </div>
                    <div className="dessert-section-image">
                        <img src="cookies.jpg" alt="dessert" />
                        <p onClick={getDessertsRecipes}>Cookies</p>
                    </div>
                </div>
            </Link>


            <DessertsList
                dessertsRecipes={dessertsRecipes}
                setDessertsCounter={setDessertsCounter}
                dessertsCounter={dessertsCounter}
            />



            <Route path="/desserts/:label">

                <ShowDessert
                    dessertsRecipes={dessertsRecipes}
                />

            </Route>
        </>

    )
}

export default DessertSection;