import { BoxProps, Box, Typography, IconButton } from "@mui/material";
import { Team } from "../teams/team.interface";
import EditIcon from "@mui/icons-material/Edit";

export interface TeamCardProps extends BoxProps {
  team: Team;
  //   openTeamModal: (id: string) => void;
}

export const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Box
      sx={{
        height: "50px",
        width: "80%",
        padding: "0 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#1976d2",
        borderRadius: "10px",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        backdropFilter: "blur( 8.5px )",
        WebkitBackdropFilter: "blur( 8.5px )",
      }}
    >
      <Typography variant="h6" color={"white"}>
        {team.name}
      </Typography>

      <IconButton
        aria-label="edit"
        sx={{
          color: "white",
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
};
