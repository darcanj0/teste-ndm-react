import { Box, BoxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlayerCard } from "../player-card";
import { Player, Team } from "../teams/team.interface";

export interface PlayersList extends BoxProps {
  players: Player[];
  teams: Team[];
  editables: boolean;
  title: string;
  teamId: string;
  refetchTeams: () => Promise<void>;
  refetchFreePlayers: () => Promise<void>;
}

export const PlayersList = ({
  players,
  title,
  editables,
  teamId,
  refetchFreePlayers,
  refetchTeams,
}: PlayersList) => {
  return (
    <Box
      textAlign={"center"}
      sx={{
        width: "300px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        overflowY: "auto",
      }}
    >
      <Typography variant="h5" color={"primary"}>
        {title}
      </Typography>
      {players.map((player) => {
        return (
          <PlayerCard
            id={player.id}
            player={player}
            editable={editables}
            teamId={teamId}
            refetchFreePlayers={refetchFreePlayers}
            refetchTeams={refetchTeams}
          />
        );
      })}
    </Box>
  );
};
