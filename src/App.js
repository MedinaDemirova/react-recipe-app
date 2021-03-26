import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/header/Header';
import Recipes from './components/Recipes/Recipes';
import Footer from './components/footer/Footer';
import Error from "./components/Error";
import MainMenu from "./components/menu/MainMenu";
import Auth from "./components/Auth/Auth";


//Services
import { sortRecipes } from './services/sortRecipes';
import { getData, getDataByCategory, getDrinksData, getDesserts } from "./services/getData";
import { validatePersonalData } from "./services/validator";

const App = () => {

  const [query, setQuery] = useState('chicken');
  const [counter, setCounter] = useState(18);

  return (
    <div className="app">


      <Switch>
     
        <Route path="/auth">
        <MainMenu />
          <Auth validatePersonalData={validatePersonalData} />
        </Route>


        <Route path="/"    >
          <Header
            query={query}
            setCounter={setCounter}
            setQuery={setQuery} />
          <MainMenu />

          <Recipes
            counter={counter}
            setCounter={setCounter}
            query={query}
            sortRecipes={sortRecipes}
            getData={getData}
            getDataByCategory={getDataByCategory}
            getDrinksData={getDrinksData}
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
