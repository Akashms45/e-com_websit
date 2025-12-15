// ✅ initial state lives with the reducer
export const regInitialState = {
  name: "",
  email: "",
  password: "",
};

export const RegReducer = (state, { type, payload }) => {
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

    case "NAME":
      return {
        ...state,
        name: payload.value,
      };

    case "RESET":
      return regInitialState;

    default:
      return state;
  }
};
