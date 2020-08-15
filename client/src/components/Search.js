import React, { Component } from "react";
import '../styles.css';


class Search extends Component {
    state = {
        hits: [],
        searchValue: "",
        clickedMeal: ""
    };

    handleOnChange = event => {
        this.setState({ searchValue: event.target.value });
    };

    handleSearch = () => {
        this.makeApiCall(this.state.searchValue);
    };
    // selectedRecipe = () => {
    //     this.setState({ clickedMeal: event.target.hit })
    // }
    selectedRecipe = e => {
        e.stopPropagation();
        const selectedRecipe = this.state.hits.filter(hit => hit.recipe.uri === e.currentTarget.dataset.id)
        this.setState({ clickedMeal: selectedRecipe[0] })

        console.log(selectedRecipe);
        // this.setState({})
    }
    // FNCTN Takes searchedInput and runs that through the application
    makeApiCall = searchInput => {

        let searchUrl = `https://api.edamam.com/search?q=${searchInput}&app_id=ec9c4f3e&app_key=fe36f64c5f90677aea3f7c92e3406936&from=0&to=100&time=1%2B`
        // var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        fetch(searchUrl)
            .then(response => {
                return response.json();

            })
            .then(jsonData => {
                this.setState({ hits: jsonData.hits });
            });
    };
    //Renders the output
    render() {
        return (
            <div id="main">
                <h1>Meal Search</h1>
                <input
                    name="text"
                    type="text"
                    placeholder="Search"
                    onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                />
                <button onClick={this.handleSearch}>Search</button>
                {this.state.hits ? (
                    <div id="meals-container">
                        {this.state.hits.map(
                            (hit, index) => (

                                <div onClick={this.selectedRecipe} class="single-meal" key={index} data-id={hit.recipe.uri} >
                                    <h2>{hit.recipe.label}</h2>
                                    <div className="recipeBox">

                                        <img src={hit.recipe.image} alt="meal-thumbnail" />
                                    </div>
                                </div>
                            ))}
                    </div>
                ) : (
                        <p>Try searching for a meal</p>
                    )}
            </div>
        );
    }
}

export default Search;