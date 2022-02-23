import { useState, useEffect } from "react";
import { getAllLigi } from "../../api/Api";
import Spinner from "../spinner/Spinner";
import CardComponent from "./cards/CardComponent";
import SearchComponent from "./Search/SearchComponent";


const Ligi = () => {
  const [ligi, setLigi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fillter, setFillter] = useState(ligi);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    setLoading(true);
    getAllLigi().then(setAllLigi);
  };

  const setAllLigi = (ligi) => {
    setLigi(ligi);
    setLoading(false);
  };

  const getFillterLigi = (arr) => {
    setFillter(arr);
  };

  return (
    <>
      <SearchComponent ligi={ligi} getFillterLigi={getFillterLigi} />
      {loading ? (
        <Spinner />
      ) : (
        <CardComponent ligi={ligi} fillter={fillter} />
      )}
    </>
  );
};

export default Ligi;
