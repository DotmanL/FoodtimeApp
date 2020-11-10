import { createSelector } from 'reselect';

const selectCart = (state) => state.product;

export const selectCartItems = createSelector(
  [selectCart],
  (product) => product.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (product) => product.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

export const selectCartSubTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.map((eachCart) => {
      return eachCart.quantity * eachCart.price;
    })
);
