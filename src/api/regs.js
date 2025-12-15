import axios from "axios";

export const userRegister = async (name, email, password) => {
  const url = "https://api.escuelajs.co/api/v1/users/";

  const { data } = await axios.post(url, {
    name,
    email,
    password,
    avatar: "https://picsum.photos/800",
  });

  return data;
};
