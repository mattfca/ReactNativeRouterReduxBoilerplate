import * as types from "../actions/actiontypes";

const initialState = {
  isFetching: false,
  data: {
      authenticated: false,
  },
};

export default function authentication(state = initialState, action = {}) {
  switch (action.type) {
    
    case types.AUTHENTICATION_STARTED:
        return {
            ...state,
            isFetching: true,
        };
      
    case types.AUTHENTICATION_SUCCESS:
        return {
            ...state,
            isFetching: false,
            data: action.data
        };
   
    case types.AUTHENTICATION_FAILED:
        return {
            ...state,
            isFetching: false,
            data: action.data
        };

    default:
      return state;
  }
}
