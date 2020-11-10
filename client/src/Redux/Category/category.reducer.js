import { ADD_CATEGORY, GET_CATEGORIES, GET_CATEGORY, CATEGORY_START, CATEGORY_ERROR, DELETE_CATEGORY } from './category.types'

const initialState = {
  category: null,
  categories: [],
  history: [],
  loading: true,
  adding: false,
  error: {}
 }

 const categoryReducer = (state = initialState, action) => {

  const { type, payload } = action;
 
 
 switch (type) {
   
 case ADD_CATEGORY: 
 return {
  ...state,
  categories: [payload, ...state.categories],
  loading: false,
  adding: false,
 };

 case CATEGORY_ERROR:
  return{
    ...state,
    error: payload,
    loading: false,
    category: null,
    adding: false,
  }

  case GET_CATEGORIES:
  return{
    ...state,
    categories: payload,
    loading: false, 
  }

 
  case GET_CATEGORY:
  return{
    ...state,
    categories: payload,
    loading: false, 
    adding: false,
  } 

 case CATEGORY_START: 
 return {
   ...state,
   adding:true,
 }

 case DELETE_CATEGORY:
  return {
    ...state,
   categories: state.categories.filter((category) => category._id !== payload),
    loading: false,
  }

 default:
 return state;
}
}

export default categoryReducer;