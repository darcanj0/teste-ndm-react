import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../api";
import headers from "../../api/header";
import { EditTeamModal } from "../edit-team-modal";
import { TeamCard } from "../team-card";
import { TeamRegister } from "./team-register";
import { Player, Team } from "./team.interface";

export const TeamsSection = () => {
  const [teams, setTeams] = useState<Team[]>();

  const refetchTeams = async () => {
    api.get("team", headers).then((res) => {
      setTeams(res.data);
    });
  };

  const [freePlayers, setFreePlayers] = useState<Player[]>();

  const refetchFreePlayers = async () => {
    api.get("player", headers).then((res) => {
      setFreePlayers(res.data);
    });
  };

  const [showEditTeamModal, setShowEditTeamModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team>();

  const openEditTeamModal = (id: string): void => {
    const team = teams?.find((team) => team.id === id);
    setSelectedTeam(team);
    setShowEditTeamModal(true);
  };

  useEffect(() => {
    api.get("team", headers).then((res) => {
      setTeams(res.data);
    });

    api.get("player", headers).then((res) => {
      setFreePlayers(res.data);
    });
  }, []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-around"}
      alignItems="center"
      sx={{
        width: "90%",
        height: "100%",
      }}
    >
      {showEditTeamModal && (
        <EditTeamModal
          team={selectedTeam as Team}
          setShowEditTeamModal={setShowEditTeamModal}
          freePlayers={freePlayers as Player[]}
        />
      )}
      <TeamRegister refetchTeams={refetchTeams} />
      <Box
        sx={{
          borderRadius: "10px",
          width: "45rem",
          height: "40rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          padding: "10px",
          gap: "15px",
          boxShadow: "20px -20px 60px #bcbeca, -20px 20px 60px #feffff",
        }}
      >
        <Typography variant="h5" color={"primary"}>
          Edit Team
        </Typography>
        {teams?.map((team) => {
          return <TeamCard team={team} openEditTeamModal={openEditTeamModal} />;
        })}
      </Box>
    </Box>
  );
};
