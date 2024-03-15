import { Action, combineReducers } from "redux";
import moviesReducer from "./movies";

const reducers = combineReducers({
  movies: moviesReducer,
});

const rootReducer = (state: any, action: Action) => {
  return reducers(state, action);
};

export default rootReducer;
