import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../api";
import headers from "../../api/header";
import { TeamCard } from "../team-card";
import { TeamRegister } from "./team-register";
import { Team } from "./team.interface";

export const TeamsSection = () => {
  const [teams, setTeams] = useState<Team[]>();

  useEffect(() => {
    api.get("team", headers).then((res) => {
      setTeams(res.data);
      console.log(teams);
    });
  }, []);

  const refetchTeams = async () => {
    api.get("team", headers).then((res) => {
      setTeams(res.data);
      console.log(teams);
    });
  };

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
          return <TeamCard team={team} />;
        })}
      </Box>
    </Box>
  );
};
