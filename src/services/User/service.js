import {authenticationService} from "../Authentication";
import {authHeader} from "../../helpers/AuthHeader";

export const userService = {
    getMe
};

function getMe() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${process.env.REACT_APP_API_URL}/me`, requestOptions)
    .then(authenticationService.handleResponse);
}