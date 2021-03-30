export function sortRecipes(sortCriteria, recipes, setRecipes) {
    if (sortCriteria === "Z-A") {
        return setRecipes(recipes.sort((a, b) => a.recipe.label.localeCompare(b.recipe.label)));
    } else {
        return setRecipes(recipes.sort((a, b) => b.recipe.label.localeCompare(a.recipe.label)));
    }
}

