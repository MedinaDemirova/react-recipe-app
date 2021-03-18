import React, { useEffect, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/Header';
import Recipes from './components/Recipes/Recipes';
import SortRecipes from './components/Recipes/SortRecipes';
import Footer from './components/Footer';
import Error from "./components/Error";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import DrinksHeader from "./components/drinks/Drinks-header";
import Drinks from "./components/drinks/Drinks";

//Services
import { sortRecipes } from './services/sortRecipes';
import { getData, getDataByCategory, getDrinksData } from "./services/getData";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  const [counter, setCounter] = useState(12);
  const [sortCriteria, setSortCriteria] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [drinksCounter, setDrinksCounter] = useState('12');

  useEffect(() => { getData(setRecipes, query, counter) }, [counter, query]);

  useEffect(() => { sortRecipes(sortCriteria, recipes, setRecipes) }, [sortCriteria]);

  useEffect(() => {  getDataByCategory(setRecipes, query, counter, searchCategory) }, [searchCategory]);

  useEffect(()=>{ getDrinksData(setDrinks, drinksCounter) },[])
  console.log('secont')

  return (
    <div className="app">
      <Header search={search}
        setSearch={setSearch}
        query={query}
        setCounter={setCounter}
        setQuery={setQuery} />
      <SortRecipes
        setSortCriteria={setSortCriteria}
        setSearchCategory={setSearchCategory}

      />
      <Switch>
        <Route path="/"  >
          <Recipes
            recipes={recipes ? recipes : []}
            counter={counter}
            setSortCriteria = {setSortCriteria}
            setCounter={setCounter} />
        </Route>



        <Route path="/auth/register">
          <Register />
        </Route>

        <Route path="/auth/login">
          <Login />
        </Route>

        <Route render={() => <Error />} />
      </Switch>

      <DrinksHeader
        setDrinks={setDrinks}
        drinksCounter={drinksCounter}
        getDrinksData={getDrinksData}
      />

      <Route path="/drinks" exact>
        
        <Drinks
          drinks={drinks ? drinks : []}
          setDrinksCounter={setDrinksCounter}
          getDrinksData = {getDrinksData}
          setDrinks = {setDrinks}
          drinksCounter = {drinksCounter}

        />
      </Route>
      <Footer />
    </div>
  )
}

export default App;
