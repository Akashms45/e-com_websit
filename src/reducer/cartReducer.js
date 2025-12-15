export const cartReducer = (state, { type, payload }) => {
  const currentUser = localStorage.getItem("currentUser");

  switch (type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart, payload.product];

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser}`,
          JSON.stringify(updatedCart)
        );
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "ADD_TO_WISHLIST": {
      const updatedWishlist = [...state.favorite, payload.product];

      if (currentUser) {
        localStorage.setItem(
          `wishlist_${currentUser}`,
          JSON.stringify(updatedWishlist)
        );
      }

      return {
        ...state,
        favorite: updatedWishlist,
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const updatedWishlist = state.favorite.filter(
        (product) => product.id !== payload.id
      );

      if (currentUser) {
        localStorage.setItem(
          `wishlist_${currentUser}`,
          JSON.stringify(updatedWishlist)
        );
      }

      return {
        ...state,
        favorite: updatedWishlist,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (product) => product.id !== payload.id
      );

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser}`,
          JSON.stringify(updatedCart)
        );
      }

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "MOVE_TO_WISHLIST": {
      const updatedWishlist = [...state.favorite, payload.product];
      const updatedCart = state.cart.filter(
        (product) => product.id !== payload.product.id
      );

      if (currentUser) {
        localStorage.setItem(
          `cart_${currentUser}`,
          JSON.stringify(updatedCart)
        );
        localStorage.setItem(
          `wishlist_${currentUser}`,
          JSON.stringify(updatedWishlist)
        );
      }

      return {
        ...state,
        cart: updatedCart,
        favorite: updatedWishlist,
      };
    }

    case "SET_CART":
      return {
        ...state,
        cart: payload,
      };

    case "SET_WISHLIST":
      return {
        ...state,
        favorite: payload,
      };

    case "CLEAR_CART":
      return {
        cart: [],
        favorite: [],
      };

    default:
      return state;
  }
};
