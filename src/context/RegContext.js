import { createContext, useContext, useReducer } from "react";
import { RegReducer, regInitialState } from "../reducer/RegReducer";

const RegContext = createContext();

const RegisterProvider = ({ children }) => {
  const [state, RegDispatch] = useReducer(RegReducer, regInitialState);

  return (
    <RegContext.Provider value={{ ...state, RegDispatch }}>
      {children}
    </RegContext.Provider>
  );
};

export const useReg = () => useContext(RegContext);
export { RegisterProvider };
