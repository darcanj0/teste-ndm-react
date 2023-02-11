import { BoxProps, Box } from "@mui/material";

export const ModalOverlay = ({ children }: BoxProps) => {
  return (
    <Box
      sx={{
        background: "rgba(0, 0, 0, 0.75)",
        position: "absolute",
        top: "0",
        left: "0",
        height: "100vh",
        width: "100vw",
        zIndex: "9999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
};
