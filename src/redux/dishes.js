import * as ActionTypes from "./ActionTypes";

export const Dishes = (
  state = { loading: true, errMess: null, dishes: [] },
  action
) => {
  switch (action.type) {
    //
    case ActionTypes.ADD_DISHES:
      return {
        ...state,
        loading: false,
        errMess: null,
        dishes: action.payload
      };

    case ActionTypes.DISHES_LOADING:
      return { ...state, loading: true, errMess: false, dishes: [] };

    case ActionTypes.DISHES_FAILED:
      return { ...state, loading: false, errMess: action.payload };

    default:
      return state;
  }
};
