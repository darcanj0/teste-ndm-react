import { Box } from "@mui/material";
import { TeamRegister } from "./team-register";

export const TeamsSection = () => {
  return (
    <Box
      display={"flex"}
      border="1px solid blue"
      justifyContent={"space-around"}
      alignItems="center"
      sx={{
        width: "90%",
        height: "100%",
      }}
    >
      <TeamRegister />
      <Box sx={{ width: "90px", height: "100px", background: "black" }}></Box>
    </Box>
  );
};
