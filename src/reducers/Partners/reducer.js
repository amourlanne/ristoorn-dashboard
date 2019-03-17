import {partnerConstants} from "../../constants/Partner";

const initialState = {
  partners: null
};

export function partnersReducer(state = initialState, action) {
  switch (action.type) {
    case partnerConstants.FETCH_ALL_REQUEST:
      return {
        ...state,
        partners: null
      };
    case partnerConstants.FETCH_ALL_SUCCESS:
      return {
        ...state,
        partners: action.partners
      };
    default:
      return state
  }
}
