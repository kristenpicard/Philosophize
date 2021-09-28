import React, { Component } from "react";
import Card from "../components/Card";
import API from "../utils/API";

class Discover extends Component {
  state = {
    image: "",
    name: "",
    ingredients: "",
    instructions: "",
  };

  // When the component mounts, load a random drink to be displayed
  componentDidMount() {
    this.loadNextDrink();
  }

  // When button clicked, go to new random drink
  handleBtnClick = () => {
    this.loadNextDrink();
  };

  // Loads random drink
  loadNextDrink = () => {
    API.getRandomDrink()
      .then((res) =>
        this.setState({
          image: res.data.drinks[0].strDrinkThumb,
          name: res.data.drinks[0].strDrink,
          ingredients: res.data.drinks[0].strIngredient1,
          instructions: res.data.drinks[0].strInstructions,
        })
      )
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Card
          image={this.state.image}
          name={this.state.name}
          ingredients={this.state.ingredients}
          instructions={this.state.instructions}
          handleBtnClick={this.handleBtnClick}
        />
      </div>
    );
  }
}

export default Discover;
