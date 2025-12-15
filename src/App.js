import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { AuthLogin } from "./pages/AuthLogin";
import { AuthRegister } from "./pages/AuthRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/Auth/Login" element={<AuthLogin />} />
        <Route path="/Auth/Register" element={<AuthRegister />} />
      </Routes>
    </>
  );
}

export default App;
