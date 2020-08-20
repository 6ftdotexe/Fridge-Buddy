import React from "react";

const Form = (props) => (
  <div className="jumbotron">
    <div className="lookuprecipe">
      <h1 className="searchname">
        <span> Look up Recipe </span>
      </h1>
    </div>
    <div className="formname">
      <form className="recipesearch" onSubmit={props.getRecipe}>
        <input type="text" placeholder="I'm Hungry For?" name="recipeName" />

        <button className="recipebutton">Search</button>
      </form>
    </div>
  </div>
);
export default Form;
