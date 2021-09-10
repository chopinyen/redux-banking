import { combineReducers } from "redux";
import { authReducer} from "./authReducers";
import {bankingReducer} from "./bankingReducers";


export const rootReducer = combineReducers({
  banking: bankingReducer,
  auth: authReducer,
});