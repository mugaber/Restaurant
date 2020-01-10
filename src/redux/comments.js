// reducer function only for comments because
// it does not have any relation with other values

import { COMMENTS } from "../shared/comments";

export const Comments = (state = COMMENTS, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
