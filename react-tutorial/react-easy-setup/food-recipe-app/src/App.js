import React, {useEffect, useState} from 'react';
import './App.css';
// require('dotenv').config();

// Import components
import Recipe from './Recipe';

function App() {

  const { REACT_APP_RECIPE_APP_ID: APP_ID, REACT_APP_RECIPE_APP_KEY: APP_KEY } = process.env;
  console.log(APP_ID, APP_KEY);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe, index) => {
          return (
            <Recipe key={index} title={recipe.recipe.label} calories={recipe.recipe.calories} 
            image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
          )
        }
        )}

      </div>
    </div>
  );
}

export default App;
