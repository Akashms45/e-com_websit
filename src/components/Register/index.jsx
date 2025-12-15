import { userRegister } from "../../api/regs";
import { useNavigate } from "react-router-dom";
import { useReg } from "../../context/RegContext";

export const Register = () => {
  const { RegDispatch, email, password, name } = useReg();
  const navigate = useNavigate();

  const onRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      await userRegister(name, email, password);

      // ✅ reset register state after success
      RegDispatch({ type: "RESET" });

      navigate("/auth/login");
    } catch (err) {
      console.error(err.response?.data || "Registration failed");
    }
  };

  const onEmailChange = (e) => {
    RegDispatch({
      type: "EMAIL",
      payload: { value: e.target.value },
    });
  };

  const onPasswordChange = (e) => {
    RegDispatch({
      type: "PASSWORD",
      payload: { value: e.target.value },
    });
  };

  const onNameChange = (e) => {
    RegDispatch({
      type: "NAME",
      payload: { value: e.target.value },
    });
  };

  return (
    <form
      className="bg-white shadow-md w-[400px] rounded-md"
      onSubmit={onRegisterSubmit}
    >
      <h1 className="font-bold text-slate-900 p-4 text-2xl">Sign Up</h1>

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
        <span className="font-semibold">Name</span>
        <input
          className="border-b-2 focus:outline-none p-2"
          type="text"
          required
          value={name}
          onChange={onNameChange}
          placeholder="Name"
        />
      </div>

      <div className="flex flex-col p-2">
        <button className="button btn-icon bg-rose-600 text-slate-50">
          Register
        </button>
      </div>
    </form>
  );
};
