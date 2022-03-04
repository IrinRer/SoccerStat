import { getAllLigi } from "../../api/Api";
import Spinner from "../spinner/Spinner";
import { CardComponentContainer } from "./cards/CardComponent";
import SearchComponent from "../search/SearchComponent";
import withMainComponent from "../../HOC/withMainComponent";

const Ligi = ({ item, getFillter, fillter, loading }) => {
  return (
    <>
      <SearchComponent ligi={item} getFillter={getFillter} />
      {loading ? <Spinner /> : <CardComponentContainer fillter={fillter} />}
    </>
  );
};

export const LigiContainer = withMainComponent(Ligi, getAllLigi);
export default Ligi;
