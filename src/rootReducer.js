import { combineReducers } from "redux";
import {fetchNewsReducer} from "./containers/NewsAppContainer/reducers";

export default function createReducer(injectedReducers) {
  return combineReducers({
    newsData : fetchNewsReducer,
    ...injectedReducers,
  });
}