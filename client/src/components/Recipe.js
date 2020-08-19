import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const APP_ID = '4fd7f07d';
const APP_KEY = '6366fb53422c0710914acf9000b5c1d6';

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {

        const title = this.props.location.state.recipe;

        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        const res = await req.json();

        console.log("--------------------------------------");
        console.log(res.hits);
        //     // and since e is an object means  we can access the 'properties' of the 'object'.

        //     // Set the state 'recipes' to the api call
        this.setState({ activeRecipe: res.hits[0].recipe })
        console.log("--------------------------------------");
        console.log('"The Active Recipe is: " ')
        console.log(this.state.activeRecipe);
        //     // console.log(this.state.recipes)

    }



    render(props) {
        const recipe = this.state.activeRecipe;

        // console.log(this.props)

        return (
            <>
                <div className="container">
                    {/* //Once you have filled the active recipe state then display the page. */}
                    {this.state.activeRecipe.length !== 0 &&
                        <>
                            <h2>{recipe.label} by {recipe.source}</h2>
                            <a href={recipe.url} ><h2>Recipe found here</h2></a>
                            <h3>Cook Time: {recipe.totalTime}</h3>
                            <img className="active__recipe" src={recipe.image} ></img>

                            <button>
                                <Link to="/">
                                    Go back
                                </Link>
                            </button>
                        </>
                    }

                </div>
            </>
        )
    }
}
export default Recipe;