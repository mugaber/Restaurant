import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId,
    rating,
    author,
    comment
  }
});

// COMMENTS ACTIONS

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + "comments")
    .then(response => response.json())
    .then(comments => dispatch(addDishes(comments)));
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addcomments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});


// DISHES ACTIONS

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

// PROMOSTIONS ACTIONS

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(response => response.json())
    .then(promos => dispatch(addDishes(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = errmess => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errmess
});

export const addPromos = promos => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos
});

