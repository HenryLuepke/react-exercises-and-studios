import recipeData from "./recipe.json";

function RecipeName() {
  return (
    <h1>{`${recipeData.name}`}</h1>
  );
}

export default RecipeName;

//import return the name of the recipe as a level 1 header