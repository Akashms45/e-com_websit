import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    favorite: [],
  };

  // Correct destructuring
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        favorite: state.favorite,
        cartDispatch: dispatch, // expose dispatch properly
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
