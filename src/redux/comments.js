import * as ActionTypes from "./ActionTypes";

// now we are going to make use of the new actions and update the comments
// to have error message and the actual comments and this will require
// that the state being passed is another object that have property comments

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return { ...state, errMess: null, comments: action.payload };

    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };

    default:
      return state;
  }
};
