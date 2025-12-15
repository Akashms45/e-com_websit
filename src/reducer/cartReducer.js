export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.product],
      };

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        favorite: [...state.favorite, payload.product],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        favorite: state.favorite.filter((product) => product.id !== payload.id),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== payload.id),
      };
    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        favorite: [...state.favorite, payload.product],
        cart: state.cart.filter((product) => product.id !== payload.product.id),
      };

    default:
      return state;
  }
};
