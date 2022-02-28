import { useState, useEffect } from "react";
import { getTeams } from "../../api/Api";
import SearchComponent from "../search/SearchComponent";
import Spinner from "../spinner/Spinner";
import CardComponentTeams from "./cardComponentTeams/CardComponentTeams";



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

  const getFillter = (arr) => {
    setFillter(arr);
  };


  return (
    <>
      <SearchComponent teams={teams} getFillter={getFillter} /> 
      {loading ? (
        <Spinner />
      ) : (
        <CardComponentTeams fillter={fillter} />
      )}
    </>
  );
};

export default Teams;