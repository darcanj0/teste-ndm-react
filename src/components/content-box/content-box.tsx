import { Box, BoxProps } from "@mui/material";

export const ContentBox = (props: BoxProps) => {
  return (
    <Box
      sx={{
        background: "#dddfee",
        boxShadow: "20px -20px 60px #bcbeca, -20px 20px 60px #feffff",
      }}
      borderRadius={"10px"}
      margin="30px"
      width={"100%"}
      padding="10px 10px 10px 10px"
      height={"calc(100vh - 60px)"}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      gap={"50px"}
    >
      {props.children}
    </Box>
  );
};
