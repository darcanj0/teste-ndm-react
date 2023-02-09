import { Box, Tab, Tabs, Typography } from "@mui/material";
import { BackgroundBox } from "../../components/background-box/background-box";

export const Main = () => {
  const sections = ["Players", "Teams"];

  return (
    <BackgroundBox>
      <Box
        sx={{
          background: "#dddfee",
          boxShadow:
            "inset -20px 20px 60px #bcbeca, inset 20px -20px 60px #feffff",
        }}
        borderRadius={"10px"}
        margin="30px"
        width={"100%"}
        padding="5px"
        height={"calc(100vh - 60px)"}
      >
        <Tabs
          sx={{ borderBottom: 1, borderColor: "divider", color: "white" }}
          textColor="primary"
          indicatorColor="primary"
          value={sections[0]}
          onChange={() => console.log("changed")}
          aria-label=""
          variant="fullWidth"
        >
          <Tab
            label={sections[0]}
            {...(<Typography variant="h3">{sections[0]}</Typography>)}
          />
          <Tab
            label={sections[1]}
            color="white"
            {...(
              <div>
                <h1>lalalal</h1>
              </div>
            )}
          />
        </Tabs>
      </Box>
    </BackgroundBox>
  );
};
