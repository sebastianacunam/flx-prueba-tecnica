import { 
  GET_USERS, 
  GET_SEARCH, 
  POST_USER, 
  REMOVE_USER, 
  FILTER_STATUS, 
  PUT_USER 
} from "../utils/constants";

const initialState = {
  allUsers: [],
  users: [],
  delete: [],
  put: []
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
    case REMOVE_USER:
      return {
        ...state,
        delete: action.payload
      }
    case PUT_USER:
      console.log('desde el reducer: ',action.payload)
      return {
        ...state,
        put: action.payload
      }

    case FILTER_STATUS:
      if (action.payload === 'active'){
        const usersActive = state.allUsers.filter( d => d.status === 'active')
        return{
          ...state,
          allUsers: usersActive
        }
      } else if (action.payload === 'inactive'){ 
        const usersInactive = state.allUsers.filter( d => d.status === 'inactive')
        return {
            ...state,
            allUsers: usersInactive
        }
      } 
    default:
      return state;
  }
}

export default rootReducer;
