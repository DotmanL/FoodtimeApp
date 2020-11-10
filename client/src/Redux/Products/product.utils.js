import { toast } from 'react-toastify';

export const addItemToCart = (cartItems, products, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );

  const productItem = products.find(
    (product) => product._id === cartItemToAdd._id
  );

  const cartFull = cartItems.find(
    (cartItem) => cartItem.quantity === productItem.quantity
  );

  if (cartFull) {
    toast.error('Product Sold out', { autoClose: 1000 });
    return cartItems.map((cartItem) => cartItem);
  }

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem._id !== cartItemToRemove._id
    );
  }
  return cartItems.map((cartItem) =>
    cartItem._id === cartItemToRemove._id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
