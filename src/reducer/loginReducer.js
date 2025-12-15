export const loginInitialState = {
  email: "",
  password: "",
  token: "",
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
        token: payload.token,
        password: "",
      };

    case "RESET":
      return loginInitialState;

    case "LOGOUT":
      return loginInitialState;

    default:
      return state;
  }
};
