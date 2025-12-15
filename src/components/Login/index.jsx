import { useEffect, useState } from "react";
import { userLogin } from "../../api/Auth";
import { useLogin } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { LoginDispatch, email, password } = useLogin();
  const navigate = useNavigate();

  const [error, setError] = useState(""); // ✅ popup message

  useEffect(() => {
    LoginDispatch({ type: "RESET" });
    setError(""); // clear error on load
  }, [LoginDispatch]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await userLogin(email, password);

      LoginDispatch({
        type: "TOKEN",
        payload: { token: data.access_token },
      });

      navigate("/");
    } catch (err) {
      // ✅ handle unauthorized
      if (err.response?.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  const onEmailChange = (e) => {
    setError(""); // clear popup while typing
    LoginDispatch({
      type: "EMAIL",
      payload: { value: e.target.value },
    });
  };

  const onPasswordChange = (e) => {
    setError(""); // clear popup while typing
    LoginDispatch({
      type: "PASSWORD",
      payload: { value: e.target.value },
    });
  };

  return (
    <form
      className="bg-white shadow-md w-[400px] rounded-md"
      onSubmit={onFormSubmit}
    >
      <h1 className="font-bold text-slate-900 p-4 text-2xl">Login</h1>

      {/* ✅ ERROR POPUP */}
      {error && (
        <div className="bg-red-100 text-red-700 p-2 mx-4 rounded text-center">
          {error}
        </div>
      )}

      <div className="flex flex-col p-2">
        <span className="font-semibold">Email *</span>
        <input
          className="border-b-2 focus:outline-none p-2"
          type="email"
          required
          value={email}
          onChange={onEmailChange}
          placeholder="Example@email.com"
        />
      </div>

      <div className="flex flex-col p-2">
        <span className="font-semibold">Password *</span>
        <input
          className="border-b-2 focus:outline-none p-2"
          type="password"
          required
          value={password}
          onChange={onPasswordChange}
          placeholder="password"
        />
      </div>

      <div className="flex flex-col p-2">
        <button className="button btn-icon bg-rose-600 text-slate-50">
          Login
        </button>
      </div>

      <div className="flex flex-col p-2 cursor-pointer items-center">
        <h2 onClick={() => navigate("/auth/register")}>
          New User <span className="text-blue-700 underline">Register!</span>
        </h2>
      </div>
    </form>
  );
};
