import { useState } from "react";
import api from "../../api";

interface LoginParams {
  email: string;
  password: string;
}

export const Login = () => {
  const [logged, setLogged] = useState(false);

  const login = (params: LoginParams) => {
    api.post("login", params).then((res) => {
      console.log(res.data);
      localStorage.setItem("ndmToken", JSON.parse(res.data));
      setLogged(true);
    });
  };

  return (
    <div>
      <h1>Login</h1>
    </div>
  );
};
