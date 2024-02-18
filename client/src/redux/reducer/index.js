import { GET_USERS, ADD_USER, REMOVE_USER } from "../utils/constants";
  
  const initialState = {
    allUsers: [],
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      //---------------------USER----------------------------------------
      case GET_USERS:
        return {
          ...state,
          allUsers: action.payload,
        };
  
      default:
        return state;
    }
  }
  
  export default rootReducer;
  