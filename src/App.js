import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/header/Header';
import Recipes from './components/Recipes/Recipes';
import Footer from './components/footer/Footer';
import Error from "./components/Error";
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";
import ProfilePage from "./components/Auth/Profile/ProfilePage";
import DrinksSection from './components/drinks/DrinksSection';
import DessertsSection from './components/desserts/DessertSection';
import MainMenu from "./components/menu/MainMenu";


//Services
import { sortRecipes } from './services/sortRecipes';
import { getData, getDataByCategory, getDrinksData, getDesserts } from "./services/getData";
import { validatePersonalData } from "./services/validator";

const App = () => {

  const [query, setQuery] = useState('chicken');
  const [counter, setCounter] = useState(18);

  return (
    <div className="app">

      <Header
        query={query}
        setCounter={setCounter}
        setQuery={setQuery} />
      <MainMenu />

      <Switch>
        user?
        <ProfilePage path="/my-profile" /> :
        <Route path="/auth/register">
          <Register />
        </Route>

        <Route path="/auth/login">
          <Login
            validatePersonalData={validatePersonalData}
          />
        </Route>

        <Route path="/"    >
          <Recipes
            counter={counter}
            setCounter={setCounter}
            query={query}
            sortRecipes={sortRecipes}
            getData={getData}
            getDataByCategory={getDataByCategory}
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
