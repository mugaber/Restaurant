import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { addComment, fetchDishes } from "../redux/ActionCreators";
import React, { Component } from "react";
import { connect } from "react-redux";
import DishDetail from "./DishDetail";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu.js";
import About from "./About";
import Home from "./Home";

const mapDispatchToProps = dispatch => ({
  //
  addComment: (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
  },
  // fetchDishes is using thunk to act as a middle ware and now it
  // will be available as a props to the main component
  fetchDishes: () => {
    dispatch(fetchDishes());
  }
});

// now dishes state will be availabe as an object with three properties
// dishes, is loading and error message

const mapStoreToProps = state => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
    comments: state.comments
  };
};

class Main extends Component {
  //
  // add a life cyle to fetch the dishes when ever the main component
  // will be mounsted to the UI view
  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          // dishes will have a property dishes that have the dishes
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.loading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.filter(promo => promo.featured)[0]}
          leader={this.props.leaders.filter(leader => leader.featured)[0]}
        />
      );
    };

    const DishWithId = ({ match }) => {
      return (
        <DishDetail
          dish={
            this.props.dishes.dishes.filter(
              dish => dish.id === parseInt(match.params.dishId, 10)
            )[0]
          }
          loading={this.props.dishes.loading}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />

        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/aboutus">
            <About leaders={this.props.leaders} />
          </Route>
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
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

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Main));
