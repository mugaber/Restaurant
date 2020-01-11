import { createStore, combineReducers, applyMiddleware } from "redux";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      promotions: Promotions,
      leaders: Leaders,
      comments: Comments
    }),
    // to make the store (state and action ) available for
    // the thunk and logger for modification and logging
    // hanldy middle ware actions
    applyMiddleware(thunk, logger)
  );

  return store;
};
