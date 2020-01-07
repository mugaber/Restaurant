import React, { Component } from "react";
import Menu from "./Menu.js";
import { DISHES } from "../shared/dishes";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";

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
    const HomePage = () => {
      return <Home />;
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;

{
  /* <Menu
          dishes={this.state.dishes}
          onClick={dishId => this.onDishSelected(dishId)}
        />
        <DishDetail
          dish={
            this.state.dishes.filter(
              dish => dish.id === this.state.selectedDish
            )[0]
          }
        /> */
}
