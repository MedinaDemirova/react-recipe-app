import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import ".//Recipes.css";

//Services
import { getData, getDataByCategory } from "../../services/getData"
import { sortRecipes } from "../../services/sortRecipes"

//Components
import Header from "../header/Header";
import Recipe from './Recipe';
import SortRecipes from '..//Recipes/menu/SortRecipes';
import DrinksSection from '../drinks/DrinksSection';
import DessertsSection from '../desserts/DessertSection';
import MainMenu from "../menu/MainMenu";


function Recipes() {

    const [sortCriteria, setSortCriteria] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [recipes, setRecipes] = useState([]);
    const [query, setQuery] = useState('chicken');
    const [counter, setCounter] = useState(18);

    useEffect(() => { getData(setRecipes, query, counter) }, [counter, query]);

    useEffect(() => { sortRecipes(sortCriteria, recipes, setRecipes) }, [sortCriteria]);

    useEffect(() => { getDataByCategory(setRecipes, query, counter, searchCategory) }, [searchCategory]);

    function loadMoreRecipes(e) {
        setCounter(Number(counter + 12));
        setSortCriteria('');
        console.log(counter)
    }

    return (
        <>
            <Header
                query={query}
                setCounter={setCounter}
                setQuery={setQuery}
            />
            <MainMenu />
            <Route path="/">
                <SortRecipes
                    setSortCriteria={setSortCriteria}
                    setSearchCategory={setSearchCategory}
                />

                <div className="recipes-list">
                    {recipes ? recipes.map(recipe => (
                        <Recipe recipe={recipe.recipe} key={`${recipe.recipe.uri}`} />
                    )) : null
                    }

                    <button
                        className="show-more"
                        onClick={loadMoreRecipes}>
                        Show more</button>
                </div>

                <DrinksSection />

                <DessertsSection />
            </Route>


        </>
    )
}

export default Recipes;