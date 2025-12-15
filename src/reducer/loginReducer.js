export const loginInitialState = {
  email: "",
  password: "",
  token: localStorage.getItem("token") || "",
};

export const loginReducer = (state, { type, payload }) => {
  switch (type) {
    case "EMAIL":
      return {
        ...state,
        email: payload.value,
      };

    case "PASSWORD":
      return {
        ...state,
        password: payload.value,
      };

    case "TOKEN":
      return {
        ...state,
        token: payload.token, // string
        password: "",
      };

    case "RESET":
      return {
        ...loginInitialState,
        token: state.token, // keep token on reset
      };

    case "LOGOUT":
      return {
        email: "",
        password: "",
        token: "",
      };

    default:
      return state;
  }
};
