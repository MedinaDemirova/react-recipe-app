import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import './App.css';

//Components
import Header from './components/header/Header';
import Recipes from './components/Recipes/Recipes';
import SortRecipes from './components/Recipes/menu/SortRecipes';
import Footer from './components/footer/Footer';
import Error from "./components/Error";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import DrinksSection from './components/drinks/DrinksSection';
import DessertsSection from './components/desserts/DessertSection';
import MainMenu from "./components/menu/MainMenu";
import Notifications from "./components/menu/Notifications";

//Services
import { sortRecipes } from './services/sortRecipes';
import { getData, getDataByCategory, getDrinksData, getDesserts } from "./services/getData";
import { validatePersonalData } from "./services/validator";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');
  const [counter, setCounter] = useState(18);
  const [sortCriteria, setSortCriteria] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [errors, setErrors] = useState([]);


  useEffect(() => { getData(setRecipes, query, counter) }, [counter, query]);

  useEffect(() => { sortRecipes(sortCriteria, recipes, setRecipes) }, [sortCriteria]);

  useEffect(() => { getDataByCategory(setRecipes, query, counter, searchCategory) }, [searchCategory]);

  


  return (
    <div className="app">
      <Header search={search}
        setSearch={setSearch}
        query={query}
        setCounter={setCounter}
        setQuery={setQuery} />
      <MainMenu />
      <Notifications
        errors={errors}
        setErrors={setErrors}
      />

      <Switch>
        <Route path="/auth/register">
          <Register />
        </Route>

        <Route path="/auth/login">
          <Login
            validatePersonalData={validatePersonalData}
            setErrors={setErrors}
          />
        </Route>

        <Route path="/"    >
          <SortRecipes
            setSortCriteria={setSortCriteria}
            setSearchCategory={setSearchCategory}
          />
          <Recipes
            recipes={recipes ? recipes : []}
            counter={counter}
            setSortCriteria={setSortCriteria}
            setCounter={setCounter}
          />
          <DrinksSection
            getDrinksData={getDrinksData}
          />

          <DessertsSection
            getDesserts={getDesserts}
          />

        </Route>





        <Route render={() => <Error />} />
      </Switch>




      <Footer />
    </div>
  )
}

export default App;
