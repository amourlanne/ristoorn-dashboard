import {authenticationService} from "../Authentication";
import {authHeader} from "../../helpers/AuthHeader";

export const partnerService = {
  fetchAll,
  fetchOne
};

function fetchAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${process.env.REACT_APP_API_URL}/partners`, requestOptions)
    .then(authenticationService.handleResponse);
}

function fetchOne(id) {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${process.env.REACT_APP_API_URL}/partners/${id}`, requestOptions)
    .then(authenticationService.handleResponse);
}
