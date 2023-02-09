import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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
    <Box
      color={"GrayText"}
      border="1px solid black"
      borderRadius={"10px"}
      height={"calc(100vh - 20px)"}
      margin={"10px"}
      textAlign="center"
    >
    </Box>
  );
};
