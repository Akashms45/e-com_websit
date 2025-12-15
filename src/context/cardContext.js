import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/cartReducer";
import { useLogin } from "./LoginContext";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const { token } = useLogin(); // 🔥 REACTIVE auth state

  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
    favorite: [],
  });

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");

    if (token && currentUser) {
      // ✅ LOGIN → load saved data
      dispatch({
        type: "SET_CART",
        payload: JSON.parse(localStorage.getItem(`cart_${currentUser}`)) || [],
      });

      dispatch({
        type: "SET_WISHLIST",
        payload:
          JSON.parse(localStorage.getItem(`wishlist_${currentUser}`)) || [],
      });
    } else {
      // ✅ LOGOUT → clear immediately
      dispatch({ type: "CLEAR_CART" });
    }
  }, [token]); // 🔥 THIS is the key change

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        favorite: state.favorite,
        cartDispatch: dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
