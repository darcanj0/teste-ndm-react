import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Player, Team } from "../teams/team.interface";
import { ModalOverlay } from "./modal-overlay";
import { PlayersList } from "./players-list";

export interface EditTeamModalProps {
  setShowEditTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
  team: Team;
  teams: Team[];
  freePlayers: Player[];
  refetchTeams: () => Promise<void>;
  refetchFreePlayers: () => Promise<void>;
}

export const EditTeamModal = ({
  setShowEditTeamModal,
  team,
  freePlayers,
  refetchFreePlayers,
  refetchTeams,
  teams,
}: EditTeamModalProps) => {
  return (
    <ModalOverlay>
      <Box
        sx={{
          background: "#dddfee",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          backdropFilter: "blur( 10.5px )",
          WebkitBackdropFilter: "blur( 10.5px )",
          borderRadius: "10px",
          width: "50rem",
          height: "35rem",
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" color={"primary"}>
          {team.name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "75%",
            justifyContent: "space-around",
          }}
        >
          <PlayersList
            title="Current Players"
            players={teams.find((t) => t.id === team.id)?.players as Player[]}
            editables={false}
            teamId={team.id}
            refetchFreePlayers={refetchFreePlayers}
            refetchTeams={refetchTeams}
            teams={teams}
          />
          <PlayersList
            title="Avaliable Players"
            teams={teams}
            players={freePlayers}
            editables={true}
            teamId={team.id}
            refetchFreePlayers={refetchFreePlayers}
            refetchTeams={refetchTeams}
          />
          <PlayersList
            title="Avaliable Players"
            players={freePlayers}
            editables={true}
          />
        </Box>
        <Button
          variant="contained"
          color="error"
          onClick={() => setShowEditTeamModal(false)}
        >
          Cancel
        </Button>
      </Box>
    </ModalOverlay>
  );
};
