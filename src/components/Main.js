import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Menu from "./Menu.js";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import DishDetail from "./DishDetail";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS
    };
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter(dish => dish.featured)[0]}
          promotion={this.state.promotions.filter(promo => promo.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      );
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
          <Route exact path="/contactus">
            <Contact />
          </Route>
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
