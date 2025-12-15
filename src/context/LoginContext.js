import { createContext, useContext, useReducer } from "react";
import { loginReducer, loginInitialState } from "../reducer/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  // ✅ hydrate token from localStorage
  const persistedToken = localStorage.getItem("token");

  const initialState = {
    ...loginInitialState,
    token: persistedToken || "",
  };

  const [state, LoginDispatch] = useReducer(loginReducer, initialState);

  return (
    <LoginContext.Provider value={{ ...state, LoginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
