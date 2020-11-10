import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCTS_ERROR,
  ADD_PRODUCT,
  TOGGLE_CART,
  REDUCE_PRODUCT,
  CLEAR_CART_PRODUCT,
} from './products.types';
import { addItemToCart, removeItemFromCart } from './product.utils';

const initialState = {
  product: null,
  hidden: true,
  products: [],
  cartItems: [],
  loading: true,
  adding: false,
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
      };

    case TOGGLE_CART: {
      return {
        ...state,
        hidden: !state.hidden,
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
