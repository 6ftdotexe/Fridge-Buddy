import React, {Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
const APP_ID = '4fd7f07d';
const APP_KEY = '6366fb53422c0710914acf9000b5c1d6';

class App extends Component {
  state = { recipes: [] }
  // convert to arrow function so you won't have to 'bind' it
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const API_CALL = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    // and since e is an object means  we can access the 'properties' of the 'object'.
    const data = await API_CALL.json();
    // Set the state 'recipes' to the api call
    this.setState({ recipes: data.hits })
    // console.log(this.state.recipes)
  }
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    //recipes is both the name and the key so only will be written once
    this.setState({ recipes })
  }
  //component did update will place the 'recipes' into 'local storage.

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Recipe Search
            </h1>
        </header>

        {/* //here is a prop */}
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />

      </div>
    )

  }


}
export default App;
