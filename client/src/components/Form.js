import React from 'react';
const URL = 'https://api.edamam.com/search?q=chicken+and=parm&';

const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text" name="recipeName" />
        <button>Search</button>
    </form>

)
export default Form;