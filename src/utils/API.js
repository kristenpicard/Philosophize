import axios from "axios";

// Export an object containing methods we'll use for accessing the Cocktail API
// base: https://www.thecocktaildb.com/api.php

export default {
  getRandomDrink: function () {
    return axios.get("www.thecocktaildb.com/api/json/v1/1/random.php");
  },
  getDrinkByName: function (name) {
    return axios.get(
      "www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name
    );
  },
  getBaseBreedsList: function () {
    return axios.get("www.thecocktaildb.com/api/json/v1/1/search.php?f=a");
  },
};
