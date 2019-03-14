import {combineReducers} from 'redux';
import {loginReducer} from "./Login";
import {globalReducer} from "./Global";

const rootReducer = combineReducers({
  loginReducer,
  globalReducer,
});

export default rootReducer;
