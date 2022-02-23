import { useState, useEffect } from "react";
import { getTeams } from "../../api/Api";
import Spinner from "../spinner/Spinner";
import CardComponentTeams from "./cardComponentTeams/CardComponentTeams";
import SearchComponentTeams from "./search/SearchComponentTeams";


const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fillter, setFillter] = useState(teams);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    setLoading(true);
    getTeams().then(setAllTeams);
  };

  const setAllTeams = (teams) => {
    setTeams(teams);
    setLoading(false);
  };

  const getFillterLigi = (arr) => {
    setFillter(arr);
  };


  return (
    <>
      <SearchComponentTeams teams={teams} getFillterLigi={getFillterLigi} />
      {loading ? (
        <Spinner />
      ) : (
        <CardComponentTeams teams={teams} fillter={fillter} />
      )}
    </>
  );
};

export default Teams;