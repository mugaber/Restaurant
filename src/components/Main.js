import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { actions } from "react-redux-form";
import React, { Component } from "react";
import { connect } from "react-redux";
import DishDetail from "./DishDetail";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu.js";
import About from "./About";
import Home from "./Home";
import {
  addComment,
  fetchDishes,
  fetchComments,
  fetchPromos
} from "../redux/ActionCreators";

//

const mapDispatchToProps = dispatch => ({
  //
  addComment: (dishId, rating, author, comment) => {
    dispatch(addComment(dishId, rating, author, comment));
  },

  fetchDishes: () => {
    dispatch(fetchDishes());
  },

  // to make use of the new fetching actions on comments and promotions

  fetchComments: () => {
    dispatch(fetchComments());
  },

  fetchPromos: () => {
    dispatch(fetchPromos());
  },

  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

//

const mapStoreToProps = state => {
  return {
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders,
    comments: state.comments
  };
};

//

class Main extends Component {
  componentDidMount() {
    // to fetch the data of the state once the component mounted
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
          dishesLoading={this.props.dishes.loading}
          dishesErrMess={this.props.dishes.errMess}
          // update the promotions state to reflect the changes
          promotion={
            this.props.promotions.promotions.filter(promo => promo.featured)[0]
          }
          promoLoading={this.props.promotions.loading}
          promoErrMess={this.props.promotions.errMess}
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
          comments={this.props.comments.comments.filter(
            comment => comment.dishId === parseInt(match.params.dishId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
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
            <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
          </Route>
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Main));
