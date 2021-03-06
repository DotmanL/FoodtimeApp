import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCTS_ERROR,
  ADD_PRODUCT,
  TOGGLE_CART,
  REDUCE_PRODUCT,
  CLEAR_CART_PRODUCT,
  CREATE_PRODUCT,
  CREATE_PRODUCT_START,
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT,
} from './products.types';
import { addItemToCart, removeItemFromCart } from './product.utils';

const initialState = {
  product: null,
  hidden: true,
  products: [],
  cartItems: [],
  loading: true,
  creating: false,
  searchResults: [],
  error: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        loading: false,
        searchResults: [],
      };

    case TOGGLE_CART: {
      return {
        ...state,
        hidden: !state.hidden,
      };
    }

    case CREATE_PRODUCT_START: {
      return {
        ...state,
        creating: true,
      };
    }

    case CREATE_PRODUCT: {
      return {
        ...state,
        product: payload,
        loading: false,
        creating: false,
      };
    }

    case SEARCH_PRODUCT_START: {
      return {
        ...state,
        loading: true,
        searchResults: [],
      };
    }
    case SEARCH_PRODUCT: {
      return {
        ...state,
        loading: false,
        searchResults: payload,
      };
    }

    case ADD_PRODUCT: {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, state.products, payload),
      };
    }

    case REDUCE_PRODUCT: {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      };
    }

    case CLEAR_CART_PRODUCT: {
      return {
        ...state,
        hidden: false,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== payload._id
        ),
      };
    }

    case GET_PRODUCT:
      return {
        ...state,
        product: payload,
        loading: false,
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        error: payload,
        product: null,
        loading: false,
        adding: false,
      };

    default:
      return state;
  }
};

export default productReducer;
