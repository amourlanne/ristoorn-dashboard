import { authenticationConstants } from "../../constants/Authentication";

let token = localStorage.getItem('token');
const initialState = token ? { loggedIn: true, token } : {};

export function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case authenticationConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
      };
    case authenticationConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        // token: action.token
      };
    case authenticationConstants.LOGIN_FAILURE:
      return {
        loggingFailure: true,
      };
    case authenticationConstants.LOGOUT_REQUEST:
      return {};
    default:
      return state
  }
}