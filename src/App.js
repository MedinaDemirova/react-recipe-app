import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import Header from './components/Header';
import Recipes from './components/Recipes/Recipes';
import SortRecipes from './components/Recipes/SortRecipes';
import Footer from './components/Footer';
import Error from "./components/Error";

//Servisec
import { sortRecipes } from './services/sortRecipes';
import { getData } from "./services/getData";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pizza');
  const [counter, setCounter] = useState(10);
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => { getData(setRecipes, query, counter) }, [query, counter]);
  useEffect(() => { sortRecipes(sortCriteria, recipes, setRecipes) }, [sortCriteria, counter]);

  return (
    <div className="app">
      <Header search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery} />
      <SortRecipes
        setSortCriteria={setSortCriteria}
      />
      <Switch>
        <Route path="/" exact >
          <Recipes
            recipes={recipes}
            counter={counter}
            setCounter={setCounter} />
        </Route>

        <Route render={() => <Error />} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
