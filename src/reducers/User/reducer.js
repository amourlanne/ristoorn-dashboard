import {userConstants} from "../../constants/User";

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loading: false, user } : {};

export function userReducer(state = initialState, action) {
  switch (action.type) {

    case userConstants.GETME_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETME_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.GETME_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}