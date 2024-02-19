import { GET_USERS, GET_SEARCH, POST_USER, REMOVE_USER } from "../utils/constants";
  
  const initialState = {
    allUsers: [],
    users: [],

  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      //---------------------USER----------------------------------------
      case GET_USERS:
        return {
          ...state,
          allUsers: action.payload,
        };
      case GET_SEARCH:
        return {
            ...state,
            allUsers: action.payload
        }
      case POST_USER:
        return {
          ...state,
          users: [...state.users, action.payload]
        }
      default:
        return state;
    }
  }
  
  export default rootReducer;
  