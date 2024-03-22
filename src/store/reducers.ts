import { combineReducers } from "redux";
import global from "./global/global.reducers";

const rootReducer = combineReducers({
  global,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
