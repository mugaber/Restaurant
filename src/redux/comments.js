// reducer function only for comments because
// it does not have any relation with other values
// to add another comment to the comments array
// we are going to make use of the action given

import * as ActionTypes from "./ActionTypes";
import { COMMENTS } from "../shared/comments";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      return state.concat(comment);
    default:
      return state;
  }
};
