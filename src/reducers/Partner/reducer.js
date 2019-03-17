import {partnerConstants} from "../../constants/Partner";

const initialState = {
  partner: null
};

export function partnerReducer(state = initialState, action) {
  switch (action.type) {
    case partnerConstants.FETCH_REQUEST:
      return {
        ...state,
        partner: null
      };
    case partnerConstants.FETCH_SUCCESS:
      return {
        ...state,
        partner: action.partner
      };
    default:
      return state
  }
}
