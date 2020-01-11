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
    applyMiddleware(thunk, logger)
  );

  return store;
};
