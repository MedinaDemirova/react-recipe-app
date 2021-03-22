import ".//Desserts.css";
import { useEffect, useState } from 'react';


function DessertSection() {

    const [dessertQuery, setDessertQuery] = useState('');

    function getDessertsRecipes(e) {
        console.log(e.target)
        setDessertQuery(e.target)
    }

    return (
        <div className="dessert-section">
            <div onClick={getDessertsRecipes} className="dessert-section-image">
                <img src="desserts.jpg" alt="dessert" />
                <p>Cakes</p>
            </div>
            <div onClick={getDessertsRecipes} className="dessert-section-image">
                <img src="icecream.jpg" alt="dessert" />
                <p>Ice Cream</p>
            </div>
            <div onClick={getDessertsRecipes} className="dessert-section-image">
                <img src="cupcakes.jpg" alt="dessert" />
                <p>Cupcakes</p>
            </div>
            <div onClick={getDessertsRecipes} className="dessert-section-image">
                <img src="cookies.jpg" alt="dessert" />
                <p>Cookies</p>
            </div>
        </div>

    )
}

export default DessertSection;