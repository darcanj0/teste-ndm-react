import { Box, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import api from "../../api";
import { BackgroundBox } from "../../components/background-box/background-box";
import { ContentBox } from "../../components/content-box/content-box";

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
    <BackgroundBox>
      <ContentBox>
        
      </ContentBox>
    </BackgroundBox>
  );
};
