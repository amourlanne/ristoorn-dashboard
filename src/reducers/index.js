import {combineReducers} from 'redux';
import {loginReducer} from "./Login";
import {globalReducer} from "./Global";
import {partnersReducer} from "./Partners";
import {partnerReducer} from "./Partner";

const rootReducer = combineReducers({
  loginReducer,
  globalReducer,
  partnersReducer,
  partnerReducer
});

export default rootReducer;
