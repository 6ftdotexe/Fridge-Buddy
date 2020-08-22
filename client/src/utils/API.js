import axios from "axios";

const APP_ID = "4fd7f07d";
const APP_KEY = "6366fb53422c0710914acf9000b5c1d6";

export default {
  searchRecipes: (recipeName) => {
    return axios.get(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
  },
};
