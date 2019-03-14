import { authenticationConstants } from "../../constants/Authentication";
import {userConstants} from "../../constants/User";

let token = localStorage.getItem('token');
let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user,
  token: token
};

export function globalReducer(state = initialState, action) {
  switch (action.type) {
    case authenticationConstants.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token
      };
    case authenticationConstants.LOGOUT_REQUEST:
      return {
        ...state,
        user: null,
        token: null
      };
    case userConstants.GETME_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state
  }
}
