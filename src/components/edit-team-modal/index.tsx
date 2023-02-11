import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Team } from "../teams/team.interface";
import { ModalOverlay } from "./modal-overlay";

export interface EditTeamModalProps {
  setShowEditTeamModal: React.Dispatch<React.SetStateAction<boolean>>;
  team: Team;
}

export const EditTeamModal = ({
  setShowEditTeamModal,
  team,
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
        <Typography>{team.name}</Typography>
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
