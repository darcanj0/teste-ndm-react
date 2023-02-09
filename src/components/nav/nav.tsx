import People from "@mui/icons-material/People";
import Person from "@mui/icons-material/Person";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export interface NavProps {
  handleSectionChange: () => void;
  currentSection: number;
}

export const Nav = ({ currentSection, handleSectionChange }: NavProps) => {
  const sections = ["PLAYERS", "TEAMS"];

  return (
    <BottomNavigation
      showLabels
      value={sections[currentSection]}
      onChange={(event, newValue) => {
        handleSectionChange();
      }}
      sx={{
        width: "fit-content",
        borderRadius: "10px",
        boxShadow:
          "inset 20px -20px 60px #bcbeca, inset -20px 20px 60px #feffff",
      }}
    >
      <BottomNavigationAction label={sections[0]} icon={<Person />} />
      <BottomNavigationAction label={sections[1]} icon={<People />} />
    </BottomNavigation>
  );
};
