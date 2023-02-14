import { Box, Button, TextField, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../api";
import { useState } from "react";
import { ErrorAlert } from "../alerts/error-alert";

const createPlayerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
  age: yup
    .number()
    .required("Age is required")
    .max(100, "Age must be between 18 and 100")
    .min(18, "Age must be between 18 and 100"),
});

interface IPlayerCreationParams {
  name: string;
  age: number;
}

export const PlayersSection = () => {
  const [showErrorAlert, setShowErrorAltert] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IPlayerCreationParams>({
    resolver: yupResolver(createPlayerSchema),
  });

  const submitForm = async (data: IPlayerCreationParams) => {
    try {
      const response = await api.post("player", data);
      if (response.status === 201) console.log("success");
    } catch (error) {
      console.error(error);
      setShowErrorAltert(true);
    }
  };

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(submitForm)}
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
          message="Something went wrong..."
          setShowErrorAltert={setShowErrorAltert}
        />
      )}
      <Typography variant="h5" color={"primary"}>
        Register a player
      </Typography>
      <TextField
        {...register("name")}
        id="outlined-basic"
        label="Name"
        variant="outlined"
        fullWidth
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        id="outlined-basic"
        label="Age"
        variant="outlined"
        type={"number"}
        fullWidth
        helperText={errors.age?.message}
        {...register("age")}
        error={!!errors.age?.message}
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
  );
};
