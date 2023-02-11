import { Box, IconButton, Typography } from "@mui/material";
import { Player } from "../teams/team.interface";
import AddIcon from "@mui/icons-material/Add";
import api from "../../api";
import headers from "../../api/header";

export interface PlayerCardProps {
  id: string;
  player: Player;
  teamId: string;
  editable: boolean;
  refetchTeams: () => Promise<void>;
  refetchFreePlayers: () => Promise<void>;
}

export const PlayerCard = ({
  player,
  editable,
  teamId,
  refetchFreePlayers,
  refetchTeams,
}: PlayerCardProps) => {
  const addPlayerToTeam = async () => {
    const body = { playerId: player.id };

    const response = await api.post(`team/${teamId}`, body, headers);
    console.log(response.status);

    refetchTeams();
    refetchFreePlayers();
  };

  return (
    <Box
      sx={{
        height: "40px",
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
        {player.name}
      </Typography>

      {editable && (
        <IconButton
          aria-label="add"
          onClick={() => addPlayerToTeam()}
          sx={{
            color: "white",
          }}
        >
          <AddIcon />
        </IconButton>
      )}
    </Box>
  );
};
