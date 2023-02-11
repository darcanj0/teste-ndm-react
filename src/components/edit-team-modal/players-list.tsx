import { Box, BoxProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { PlayerCard } from "../player-card";
import { Player } from "../teams/team.interface";

export interface PlayersList extends BoxProps {
  players: Player[];
  editables: boolean;
  title: string;
}

export const PlayersList = ({ players, title, editables }: PlayersList) => {
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
        return <PlayerCard player={player} editable={editables} />;
      })}
    </Box>
  );
};
