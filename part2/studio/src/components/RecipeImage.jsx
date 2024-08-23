import recipeData from './recipe.json'

function RecipeImage() {
   return (
    <img className = "recipeImage" src = {`${recipeData.RecipeImage}`}></img>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 