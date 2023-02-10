import { useEffect, useState } from "react";
import api from "../../api";
import * as yup from "yup";
import { BackgroundBox } from "../../components/background-box/background-box";
import { ContentBox } from "../../components/content-box/content-box";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { ErrorAlert } from "../../components/alerts/error-alert";
import { useNavigate } from "react-router";

interface ILoginParams {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(6, "Password is too short")
    .max(10, "Password is too long"),
});

export const Login = () => {
  useEffect(() => {
    const token = localStorage.getItem("ndmToken");
    if (token) {
      navigate("/");
    }
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginParams>({
    resolver: yupResolver(loginSchema),
  });

  const [showErrorAlert, setShowErrorAltert] = useState(false);

  const navigate = useNavigate();

  const login = async (params: ILoginParams) => {
    try {
      const response = await api.post("auth", params);
      localStorage.setItem("ndmToken", response.data);
      navigate("/");
    } catch (error) {
      setShowErrorAltert(true);
      console.error(error);
    }
  };

  return (
    <BackgroundBox>
      <ContentBox justifyContent={"space-around"}>
        <Box
          margin={"auto 0"}
          component={"form"}
          onSubmit={handleSubmit(login)}
          sx={{
            background: "#dddfee",
            boxShadow: "20px -20px 60px #bcbeca, -20px 20px 60px #feffff",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            backdropFilter: "blur( 10.5px )",
            WebkitBackdropFilter: "blur( 10.5px )",
            borderRadius: "10px",
            width: "25rem",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {showErrorAlert && (
            <ErrorAlert
              message="Wrong email and/or password"
              setShowErrorAltert={setShowErrorAltert}
            />
          )}
          <Typography variant="h5" color={"primary"}>
            Welcome!
          </Typography>
          <TextField
            {...register("email")}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type={"password"}
            hidden={false}
            fullWidth
            helperText={errors.password?.message}
            {...register("password")}
            error={!!errors.password?.message}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "50%",
            }}
          >
            Submit
          </Button>
        </Box>
      </ContentBox>
    </BackgroundBox>
  );
};
