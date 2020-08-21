onst mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ""
  }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
