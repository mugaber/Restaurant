import { createStore, combineReducers } from "redux";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Comments } from "./comments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      promotions: Promotions,
      leaders: Leaders,
      comments: Comments
    })
  );

  return store;
};
