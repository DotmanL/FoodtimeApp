import axios from 'axios';

import { toast } from 'react-toastify';

import {
  GET_PRODUCTS,
  GET_PRODUCT,
  PRODUCTS_ERROR,
  ADD_PRODUCT,
  TOGGLE_CART,
  REDUCE_PRODUCT,
  CLEAR_CART_PRODUCT,
  CREATE_PRODUCT_START,
  CREATE_PRODUCT,
  SEARCH_PRODUCT_START,
  SEARCH_PRODUCT,
} from './products.types';

//ADD product to cart
export const addProduct = (product) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT,
    payload: product,
  });
  // toast.success('Product Added', { autoClose: 800 });
};

export const searchProducts = (query) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCH_PRODUCT_START,
    });
    const res = await axios.get(`/api/products/search?search=${query}`);
    dispatch({
      type: SEARCH_PRODUCT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createProduct = (formData) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': undefined,
      },
    };

    dispatch({
      type: CREATE_PRODUCT_START,
    });

    const res = await axios.post('/api/products', formData, config);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res.data,
    });

    toast.success('Product Created');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) =>
        toast.error('Failed to create product', error.msg)
      );
    }
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Reduce product from cart
export const reduceProduct = (product) => async (dispatch) => {
  dispatch({
    type: REDUCE_PRODUCT,
    payload: product,
  });
  // toast.success('Product Reduced', { autoClose: 600 });
};

export const clearCartProduct = (product) => async (dispatch) => {
  dispatch({
    type: CLEAR_CART_PRODUCT,
    payload: product,
  });
  toast.warn('Product Removed', { autoClose: 1000 });
};

export const toggleCart = () => async (dispatch) => {
  dispatch({
    type: TOGGLE_CART,
  });
};

//Get All Products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/products');
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (err) {
    //console.log(err, 'errror rsds');
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Get by Id
export const getProductsById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/products/product/by/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
    // toast.success('Products loaded see')
  } catch (err) {
    dispatch({
      type: PRODUCTS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
