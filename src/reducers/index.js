import {combineReducers} from 'redux';
import {authenticationReducer} from "./Authentication";
import {userReducer} from "./User";

const rootReducer = combineReducers({
  authenticationReducer,
  userReducer
});

export default rootReducer;