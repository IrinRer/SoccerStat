import { useState, useEffect } from "react";

const withMainComponent = (BaseComponent, getData) => {
  return (props) => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fillter, setFillter] = useState(item);

    useEffect(() => {
      onRequest();
    }, []);

    const onRequest = () => {
      setLoading(true);
      getData()
        .then(setAllItem)
        .catch((error) => console.log(`Error ${error} ${error.status}`));
    };

    const setAllItem = (item) => {
      setItem(item);
      setLoading(false);
    };

    const getFillter = (arr) => {
      setFillter(arr);
    };

    return (
      <BaseComponent
        getFillter={getFillter}
        item={item}
        fillter={fillter}
        loading={loading}
      />
    );
  };
};

export default withMainComponent;
