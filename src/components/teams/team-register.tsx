import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import api from "../../api";
import { ErrorAlert } from "../alerts/error-alert";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography, Box } from "@mui/material";
import { BoxProps } from "@mui/material/Box";
import { Team } from "./team.interface";

const createTeamSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
});

interface ITeamCreationParams {
  name: string;
}

export interface TeamRegisterProps extends BoxProps {
  refetchTeams: () => Promise<void>;
}

export const TeamRegister = ({ refetchTeams }: TeamRegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITeamCreationParams>({
    resolver: yupResolver(createTeamSchema),
  });

  const [showTeamCreationAlert, setShowTeamCreationAlert] = useState(false);

  const submitForm = async (data: ITeamCreationParams) => {
    try {
      const response = await api.post("team", data);
      if (response.status === 201) console.log("success");
      await refetchTeams();
    } catch (error) {
      console.error(error);
      setShowTeamCreationAlert(true);
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
      {showTeamCreationAlert && (
        <ErrorAlert
          message="Something went wrong..."
          setShowErrorAltert={setShowTeamCreationAlert}
        />
      )}
      <Typography variant="h5" color={"primary"}>
        Register a team
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
