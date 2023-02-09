import { Box, BoxProps } from "@mui/material";

export const BackgroundBox = ({ children }: BoxProps) => {
  return (
    <Box
      sx={{
        background: "#931fa3",
      }}
      minHeight="100vh"
      width="100vw"
      display="flex"
      justifyContent="space-around"
    >
      {children}
    </Box>
  );
};
