import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/LoginContext";

export const Navbar = () => {
  const navigate = useNavigate();

  const [isAccDropDownOpen, setisAccDropDownOpen] = useState(false);
  const { token, LoginDispatch } = useLogin();
  console.log(token);
  const onLoginClick = () => {
    if (token) {
      LoginDispatch({ type: "LOGOUT" });
      navigate("/auth/login");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <header className=" flex py-4 px-6 text-slate-300 bg-rose-800">
      <h1
        onClick={() => navigate("/")}
        className="text-4xl hover:cursor-pointer"
      >
        Shop-it
      </h1>
      <nav className="ml-auto flex gap-8">
        <span
          onClick={() => navigate("/cart")}
          className="material-symbols-outlined text-3xl hover:cursor-pointer"
        >
          shopping_cart
        </span>
        <span
          onClick={() => navigate("/wishlist")}
          className="material-symbols-outlined text-3xl hover:cursor-pointer"
        >
          favorite
        </span>
        <div className="relative">
          <span
            onClick={() => setisAccDropDownOpen(!isAccDropDownOpen)}
            className="material-symbols-outlined text-3xl hover:cursor-pointer"
          >
            account_circle
          </span>
          {isAccDropDownOpen && (
            <div className="absolute bg-orange-400 p-2 font-semibold rounded-sm text-white">
              <button onClick={() => onLoginClick()}>
                {token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
