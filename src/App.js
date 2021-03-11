import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Search from './components/Search';
import SearchByMeal from './components/SearchByMeal';
import SearchByType from './components/SearchByType';

const API_KEY = 'c208332812570382c9f55c23e57813ca';
const YOUR_APP_ID = '7f7821ed';

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pizza');

  useEffect(() => { getData() }, [query]);

  const getData = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}`);
      let data = await response.json();
      console.log(data);
      setRecipes(data.hits)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="App">
      <Header />
      <Search
        search={search}
        setSearch={setSearch}
        query={query}
        setQuery={setQuery}
      />

      <SearchByMeal />
      <SearchByType />

      <Recipes recipes={recipes} />
    </div>
  )
}

export default App;
