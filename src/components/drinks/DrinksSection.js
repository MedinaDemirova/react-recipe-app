import DrinksHeader from "./Drinks-header";
import Drinks from "./Drinks";
import ShowDrink from "./ShowDrink";


import { Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import  ".//Drinks.css"

function DrinksSection({ getDrinksData, getOneDrink }) {
    const [drinks, setDrinks] = useState([]);
    const [drinksCounter, setDrinksCounter] = useState('12');

    useEffect(() => { getDrinksData(setDrinks, drinksCounter) }, [drinksCounter])

    return (
        <>
            <DrinksHeader
                setDrinks={setDrinks}
                drinksCounter={drinksCounter}
                getDrinksData={getDrinksData}
            />

            <Route path="/drinks" >

                <Drinks
                    drinks={drinks ? drinks : []}
                    setDrinksCounter={setDrinksCounter}
                    getDrinksData={getDrinksData}
                    setDrinks={setDrinks}
                    drinksCounter={drinksCounter}
                  
                />
            </Route>

            <Route path="/drinks/:label">
        
                <ShowDrink
                    drinks = {drinks}
                />

            </Route>
        </>
    )
}

export default DrinksSection;