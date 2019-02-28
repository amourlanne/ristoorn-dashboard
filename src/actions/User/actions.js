import {userConstants} from "../../constants/User";
import {userService} from "../../services/User";

export const userActions = {
  getMe
};

function getMe() {
  return dispatch => {
    dispatch(request());

    userService.getMe()
      .then(
        user => {
          dispatch(success(user));
          localStorage.setItem('user', JSON.stringify(user));
        },
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: userConstants.GETME_REQUEST } }
  function success(user) { return { type: userConstants.GETME_SUCCESS, user } }
  function failure(error) { return { type: userConstants.GETME_FAILURE, error } }
}