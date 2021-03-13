import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
//import Search from './components/Search';
import SortRecipes from './components/SortRecipes';
import Footer from './components/Footer';

const API_KEY = 'c208332812570382c9f55c23e57813ca';
const YOUR_APP_ID = '7f7821ed';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pizza');
  const [counter, setCounter] = useState(10);
  const [sortCriteria, setSortCriteria] = useState('');

  useEffect(() => { getData() }, [query, counter]);
  useEffect(() => { sortRecipes() }, [sortCriteria, counter]);


  const getData = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${counter}`)
      let data = await response.json();
      console.log(data);
      setRecipes(data.hits)
      console.log(data.hits)
    } catch (err) {
      console.log(err)
    }
  }


  const sortRecipes = () => {
    if (sortCriteria === "Z-A") {
      return setRecipes(recipes.sort((a, b) => a.recipe.label.localeCompare(b.recipe.label)));
    } else if (sortCriteria === "A-Z") {
      return setRecipes(recipes.sort((a, b) => b.recipe.label.localeCompare(a.recipe.label)));
    } else {
      return;
    }
  }

  return (
    <div className="app">
      <Header search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery} />
      <SortRecipes
        setSortCriteria={setSortCriteria}
      />

      <Recipes
        recipes={recipes}
        counter={counter}
        setCounter={setCounter} />

      <Footer />
    </div>
  )
}

export default App;
