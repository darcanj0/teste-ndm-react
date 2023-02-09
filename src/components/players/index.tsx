import { Box } from "@mui/material";

export const PlayersSection = () => {
  return (
    <Box
      sx={{
        background: "#dddfee",
        boxShadow:
          "20px -20px 60px #bcbeca, -20px 20px 60px #feffff",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        backdropFilter: "blur( 10.5px )",
        WebkitBackdropFilter: "blur( 10.5px )",
        borderRadius: "10px",
        width: "25rem",
        height: "30rem",
      }}
    ></Box>
  );
};
