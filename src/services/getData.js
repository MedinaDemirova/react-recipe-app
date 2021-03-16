const API_KEY = 'c208332812570382c9f55c23e57813ca';
const YOUR_APP_ID = '7f7821ed';

export async function getData(setRecipes, query, counter) {
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