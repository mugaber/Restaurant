import React, { Component } from "react";
import Menu from "./Menu.js";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Header from './Header'
import Footer from './Footer'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelected(dishId) {
    this.setState({
      selectedDish: dishId
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelected(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
