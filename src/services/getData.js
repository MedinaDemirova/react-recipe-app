const API_KEY = 'c208332812570382c9f55c23e57813ca';
const YOUR_APP_ID = '7f7821ed';

//Get recipes
export async function getData(setRecipes, query, counter) {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${counter}`)
        let data = await response.json();
        return setRecipes(data.hits.sort((a, b) => a.recipe.label.localeCompare(b.recipe.label)))
    } catch (err) {
        throw err;
    }
}

export async function getDataByCategory(setRecipes, query, counter, searchCategory) {
    try {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${counter}&mealType=${searchCategory}`,
        )
        let data = await response.json();
        setRecipes(data.hits)
    } catch (err) {
       throw err;
    }
}

//Get drinks
export async function getDrinksData(setDrinks, drinksCounter) {
    try {
        const response = await fetch(
            `https://api.edamam.com/search?q=drinks&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${drinksCounter}`,
        )
        let data = await response.json();
        setDrinks(data.hits)
       
    } catch (err) {
       throw err;
    }
}

//Get desserts
export async function getDesserts(setDessertsRecipes, dessertsQuery, dessertsCounter) {
    try {
        const response = await fetch(`https://api.edamam.com/search?q=${dessertsQuery}&app_id=${YOUR_APP_ID}&app_key=${API_KEY}&from=0&to=${dessertsCounter}`)
        let data = await response.json();
        return setDessertsRecipes(data.hits)
    } catch (err) {
        throw err;
    }
}