import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, PROFILE_START } from "./profile.types";


const initialState = {
 profile: null,
 profiles: [],
 loading: true,
 creating: false,
 error: {}
}


const profileReducer = (state = initialState, action) => {

 const { type, payload } = action;


switch (type) {
  
case GET_PROFILE:
case UPDATE_PROFILE: 
return {
 ...state,
 profile: payload,
 loading: false,
 creating: false
 
};
 
case PROFILE_START:
return{
  ...state,
  creating: true
}

case GET_PROFILES:
  return{
    ...state,
    profiles: payload,
    loading: false,
  
  }


case PROFILE_ERROR:
  return{
    ...state,
    error: payload,
    loading: false,
    profile: null
  }
  case CLEAR_PROFILE:
    return{
      ...state,
      profile: null,
      loading: false
    }
default:
 return state;
}
}

export default profileReducer;