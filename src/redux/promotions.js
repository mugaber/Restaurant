import * as ActionTypes from "./ActionTypes";

export const Promotions = (
  state = { loading: false, errMess: null, promotions: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOS:
      return {
        ...state,
        loading: false,
        errMess: null,
        promotions: action.payload
      };

    case ActionTypes.PROMOS_LOADING:
      return { ...state, loading: true, errMess: null, promotions: [] };

    case ActionTypes.PROMOS_FAILED:
      return { ...state, loading: false, errMess: action.payload };

    default:
      return state;
  }
};
