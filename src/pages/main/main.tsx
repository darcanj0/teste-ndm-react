import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BackgroundBox } from "../../components/background-box/background-box";
import { ContentBox } from "../../components/content-box/content-box";
import { Nav } from "../../components/nav/nav";
import { PlayersSection } from "../../components/players";
import { TeamsSection } from "../../components/teams";

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("ndmToken");
    if (!token) {
      navigate("/login");
    }
  });

  const sections = ["PLAYERS", "TEAMS"];

  const [currentSection, setCurrentSection] = useState(sections[0]);

  const handleSectionChange = (newValue: string) => {
    setCurrentSection(newValue);
  };

  return (
    <BackgroundBox>
      <ContentBox>
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
      </ContentBox>
    </BackgroundBox>
  );
};
