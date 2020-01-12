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
  return (
    fetch(baseUrl + "comments")
      // to handle the situration if there is an error
      // first we create an error from the response then
      // throw it to create and error message from it
      // in the same then situation then we will catch
      // the error message that have been created and thrown
      .then(
        response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        error => {
          var errmess = new Error(error.message);
          throw errmess;
        }
      )
      .then(response => response.json())
      .then(comments => dispatch(addComments(comments)))
      .catch(error => dispatch(commentsFailed(error.message)))
  );
};

export const commentsFailed = errmess => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errmess
});

export const addComments = comments => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
});

// DISHES ACTIONS

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + "dishes")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = errmess => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errmess
});

export const addDishes = dishes => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes
});

// PROMOSTIONS ACTIONS

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading());

  return fetch(baseUrl + "promotions")
    .then(
      response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      error => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
};

// export const fetchPromos = () => dispatch => {
//   dispatch(promosLoading());

//   return fetch(baseUrl + "promotions")
//     .then(
//       response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error(
//             "Error " + response.status + ": " + response.statusText
//           );
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//       }
//     )
//     .then(response => response.json())
//     .then(promos => dispatch(addPromos(promos)));
//     .catch(error => dispatch(promosFailed(error.message)));
// };

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
