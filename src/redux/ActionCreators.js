import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment
  }
});

// now we will create some actions for dishes (loading, failed and ADD)
// these actions will be used by dishes reducer and applyed through redux thunk

// the actions will be available for the specific reducer and will use the action
// extract infomation and operations to be berformed add more if necessary 
// the return something based on that 

// fetchDishes uses thunk to interfere in between to do some action 
// as a middle ware simulating fetching data from a server

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errmessg => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmessg
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});
