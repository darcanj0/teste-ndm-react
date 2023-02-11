import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../api";
import headers from "../../api/header";
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
      border="1px solid blue"
      justifyContent={"space-around"}
      alignItems="center"
      sx={{
        width: "90%",
        height: "100%",
      }}
    >
      <TeamRegister refetchTeams={refetchTeams} />
      {teams?.map((team) => {
        return (
          <Box
            id={team.id}
            sx={{ width: "90px", height: "100px", background: "black" }}
          ></Box>
        );
      })}
    </Box>
  );
};
