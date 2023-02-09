import { Box } from "@mui/material";
import { useState } from "react";
import { BackgroundBox } from "../../components/background-box/background-box";
import { Nav } from "../../components/nav/nav";
import { PlayersSection } from "../../components/players";
import { TeamsSection } from "../../components/teams";

export const Main = () => {
  const sections = ["PLAYERS", "TEAMS"];

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleSectionChange = (newValue: string) => {
    setCurrentSection(newValue);
  };

  return (
    <BackgroundBox>
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
        <Nav
          handleSectionChange={handleSectionChange}
          currentSection={currentSection}
          sections={sections}
        />
        {currentSection === "PLAYERS" ? (
          <PlayersSection></PlayersSection>
        ) : (
          <TeamsSection></TeamsSection>
        )}
      </Box>
    </BackgroundBox>
  );
};
