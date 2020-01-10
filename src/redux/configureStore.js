import { createStore, combineReducers } from "redux";
import { Leaders } from "./leaders";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Comments } from "./comments";

// combine reducers will return an object mappign every state
// to the reducer that have the details, then create store will
// return this and safe it in the store

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
