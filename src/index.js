import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cardContext";
import { LoginProvider } from "./context/LoginContext";
import { RegisterProvider } from "./context/RegContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/e-com_websit">
      <LoginProvider>
        <CartProvider>
          <RegisterProvider>
            <App />
          </RegisterProvider>
        </CartProvider>
      </LoginProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
