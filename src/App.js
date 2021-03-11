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
  const [mealQuery, setMealQuery] = useState('');
  const [typeQuery, setTypeQuery] = useState('');
  const [counter, setCounter] = useState(10);

  useEffect(() => { getData() }, [query, counter]);
  useEffect(() => { filterRecipesMealType() }, [mealQuery]);
  useEffect(() => { filterRecipesType() }, [typeQuery]);


  const getData = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${counter}`)
      let data = await response.json();
      console.log(data);
      setRecipes(data.hits)
      console.log (data.hits)
    } catch (err) {
      console.log(err)
    }
  }

  const filterRecipesMealType = () => {
    setRecipes(recipes.filter((rec) => {
      (rec.recipe.mealType && rec.recipe.mealType.includes(mealQuery.toLocaleLowerCase()))
    }));
  }

  const filterRecipesType = () => {
    setRecipes(recipes.filter((rec) => {
      (rec.recipe.dishType && rec.recipe.dishType.includes(typeQuery.toLocaleLowerCase()))
    }));
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

      <SearchByMeal
        mealQuery={mealQuery}
        setMealQuery={setMealQuery}
        recipes={recipes}
        setRecipes={setRecipes} />

      <SearchByType
        typeQuery={typeQuery}
        setTypeQuery={setTypeQuery}
        recipes={recipes}
        setRecipes={setRecipes} />

      <Recipes
        recipes={recipes}
        counter={counter}
        setCounter={setCounter} />
    </div>
  )
}

export default App;
