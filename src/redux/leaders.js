import * as ActionTypes from "./ActionTypes";

export const Leaders = (
  state = { loading: true, errMess: null, leaders: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        loading: false,
        errMess: null,
        leaders: action.payload
      };

    case ActionTypes.LEADERS_LOADING:
      return { ...state, loading: true, errMess: null, promotions: [] };

    case ActionTypes.LEADERS_FAILED:
      return { ...state, loading: false, errMess: action.payload };

    default:
      return state;
  }
};
