import { getTeams } from "../../api/Api";
import withMainComponent from "../../HOC/withMainComponent";
import SearchComponent from "../search/SearchComponent";
import Spinner from "../spinner/Spinner";
import { CardComponentContainer } from "./cardComponentTeams/CardComponentTeams";

const Teams = ({ item, getFillter, fillter, loading }) => {
  return (
    <>
      <SearchComponent teams={item} getFillter={getFillter} />
      {loading ? <Spinner /> : <CardComponentContainer fillter={fillter} />}
    </>
  );
};
export const TeamsContainer = withMainComponent(Teams, getTeams);
export default Teams;
