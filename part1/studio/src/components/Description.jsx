import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.seriouseats.com/easy-roasted-garlic-focaccia-no-knead-bread-recipe";
    let authorPhoto = "https://images.squarespace-cdn.com/content/v1/55b880f7e4b0fdc3eabeed4c/5e7857d2-ea39-4eed-9ea4-cef569986e5f/7I0A2881-FINAL+copy+2+small.jpg?format=1000w";
    let authorName = "J. Kenji López-Alt";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "J. Kenji López-Alt" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Serious Eats</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Easy Roasted-Garlic Focaccia Recipe</h1>
                    <p>Roasted cloves and garlic butter make for a one-two punch in this simple riff on garlic bread</p>
                </div>
            </div>
        );
    }
}

export default RecipeDescription;