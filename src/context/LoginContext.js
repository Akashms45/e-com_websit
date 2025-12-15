import { createContext, useContext, useReducer } from "react";
import { loginReducer, loginInitialState } from "../reducer/loginReducer";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [state, LoginDispatch] = useReducer(loginReducer, loginInitialState);

  return (
    <LoginContext.Provider value={{ ...state, LoginDispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

const useLogin = () => useContext(LoginContext);

export { LoginProvider, useLogin };
