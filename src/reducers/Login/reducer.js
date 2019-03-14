import { authenticationConstants } from "../../constants/Authentication";

const initialState = {
  loggingIn: false,
  loggingFailure: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case authenticationConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        loggingFailure: false,
      };
    case authenticationConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
      };
    case authenticationConstants.LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        loggingFailure: true,
      };
    case authenticationConstants.LOGOUT_REQUEST:
      return {
        ...state,
        loggingIn: false,
      };
    default:
      return state
  }
}
