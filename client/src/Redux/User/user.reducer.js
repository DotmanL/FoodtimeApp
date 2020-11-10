import {
  SIGN_UP_START,
   SIGN_UP_SUCCESS, 
   SIGN_UP_FAIL,
    USER_LOADED, 
    AUTH_ERROR,
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAIL,
    SIGN_OUT,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAILURE,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_FAILURE,
    RESET_PASSWORD,
    RESET_PASSWORD_FAILURE,
    UPDATE_USER,
    USER_ERROR,
    GET_ALL_USERS,
    SUSPEND_USER
  } from './user.types'

 // import { DELETE_ACCOUNT } from '../Profile/profile.types'

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  users:[],
  error:{}
 }

 
const userReducer = (state = initialState, action) => {

  const { type, payload } = action;


switch (type) {
case SIGN_UP_SUCCESS: 
return {
  ...state,
  ...payload,
  isAuthenticated: false,
  loading: false,
  user: null
}

case SIGN_IN_SUCCESS:
  return {
    ...state,
    ...payload,
    isAuthenticated: true,
    loading: false
  }

  case ACTIVATION_SUCCESS: 
  case RESET_PASSWORD:
  case FORGOT_PASSWORD:
  return {
    ...state,
    ...payload,
    isAuthenticated: false,
    loading: false
  }

  case SIGN_UP_FAIL:
  case AUTH_ERROR:
  case SIGN_IN_FAIL:
  case SIGN_OUT:
  case ACTIVATION_FAILURE:  
  case FORGOT_PASSWORD_FAILURE:
  case RESET_PASSWORD_FAILURE: 
 // case DELETE_ACCOUNT:
    return {
      ...state,
      token: null,
      isAuthenticated: false,
      loading: false,
      user: null,
    }
  case USER_LOADED:
    return {
      ...state,
      isAuthenticated: true,
      loading: false,
      user: payload
    }
  case SIGN_IN_START: 
  case SIGN_UP_START:
  
  return {
    ...state,
    isAuthenticated: false,
    loading: true
  }

  case GET_ALL_USERS: 
  return {
    ...state,   
     loading: false,
     isAuthenticated: true,
     users: payload
  }


  case UPDATE_USER: 
  return {
    ...state,   
     loading: false,
     isAuthenticated: true,
     user: payload
  }

  case SUSPEND_USER: 
  return {
    ...state,   
     loading: false,
     isAuthenticated: true,
     users: [payload, ...state.users]
  }

  
  


  case USER_ERROR:
  return{
    ...state,
    error: payload,
    loading: false,

  }

default:
  return state;
}
}

export default userReducer;