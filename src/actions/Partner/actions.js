import {partnerService} from "../../services/Partner";
import {partnerConstants} from "../../constants/Partner";

export const partnerActions = {
  fetchAll,
  fetchOne
};

function fetchAll() {
  return dispatch => {
    dispatch(request());

    partnerService.fetchAll()
      .then(
        partners => dispatch(success(partners)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: partnerConstants.FETCH_ALL_REQUEST } }
  function success(partners) { return { type: partnerConstants.FETCH_ALL_SUCCESS, partners } }
  function failure(error) { return { type: partnerConstants.FETCH_ALL_FAILURE, error } }
}

function fetchOne(id) {
  return dispatch => {
    dispatch(request());

    partnerService.fetchOne(id)
      .then(
        partner => dispatch(success(partner)),
        error => dispatch(failure(error.toString()))
      );
  };

  function request() { return { type: partnerConstants.FETCH_REQUEST } }
  function success(partner) { return { type: partnerConstants.FETCH_SUCCESS, partner } }
  function failure(error) { return { type: partnerConstants.FETCH_FAILURE, error } }
}
