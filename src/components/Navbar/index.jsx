import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";
import { useCart } from "../../context/cardContext";
import { FaShopify } from "react-icons/fa6";

export const Navbar = () => {
  const navigate = useNavigate();
  const { cart, favorite } = useCart();
  const { token, LoginDispatch } = useLogin();

  const [isAccDropDownOpen, setisAccDropDownOpen] = useState(false);

  const onLoginClick = () => {
    setisAccDropDownOpen(false);

    if (token) {
      // ✅ clear persisted auth data
      localStorage.removeItem("token");
      localStorage.removeItem("currentUser");

      LoginDispatch({ type: "LOGOUT" });
    }

    navigate("/auth/login");
  };

  return (
    <header className="flex py-4 px-6 text-slate-300 bg-rose-800">
      <h1
        onClick={() => navigate("/")}
        className="font-sans font-semibold italic flex text-4xl hover:cursor-pointer "
      >
        <FaShopify className="size-10" />
        hopzi...
      </h1>

      <nav className="ml-auto flex gap-8">
        {/* CART */}
        <span
          onClick={() => navigate("/cart")}
          className="relative flex items-center material-symbols-outlined text-3xl cursor-pointer"
        >
          shopping_cart
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 border-rose-500 border bg-rose-50 text-rose-500 text-sm font-semibold h-4 w-4 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </span>

        {/* WISHLIST */}
        <span
          onClick={() => navigate("/wishlist")}
          className="relative flex items-center material-symbols-outlined text-3xl cursor-pointer"
        >
          favorite
          {favorite.length > 0 && (
            <span className="absolute -top-1 -right-2 border-rose-500 border bg-rose-50 text-rose-500 text-sm font-semibold h-4 w-4 flex items-center justify-center rounded-full">
              {favorite.length}
            </span>
          )}
        </span>

        {/* ACCOUNT */}
        <div className="relative">
          <span
            onClick={() => setisAccDropDownOpen((prev) => !prev)}
            className="material-symbols-outlined text-3xl cursor-pointer"
          >
            account_circle
          </span>

          {isAccDropDownOpen && (
            <div className="absolute right-0 bg-rose-50 border-rose-400 border p-1 font-semibold rounded-xl text-rose-400 shadow-md">
              <button
                onClick={onLoginClick}
                className="block w-full text-left px-2 py-1 rounded-xl hover:bg-rose-200"
              >
                {token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
