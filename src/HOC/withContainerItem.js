import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNameTeam } from "../api/Api";
import NotFound from "../component/pageNotFound/NotFound";
import Spinner from "../component/spinner/Spinner";

const withContainerItem = (BaseComponent, getData) => {
  return (props) => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [nameTeam, setName] = useState(null);
    const [, setLoading] = useState(false);
    const [error, setError] = useState(false);
    let nameLiga;

    useEffect(() => {
      onRequest();
      onGetName();
    }, [id]);

    const onRequest = () => {
      setLoading(true);
      getData(id).then(setItemFunc).catch(setErrorMess);
    };

    const onGetName = () => {
      getNameTeam(id)
        .then(setNameTeam)
        .catch((error) => console.log(`Error ${error} ${error.status}`));
    };

    const setNameTeam = (team) => {
      setName(team[0].name);
    };

    const setItemFunc = (item) => {
      setItem(item);
      setLoading(false);
    };

    const setErrorMess = () => {
      setError(true);
    };

    if (!item && !error) {
      return <Spinner />;
    } else if (error) {
      return <NotFound />;
    }

    const columns = [
      {
        title: "Дата",
        dataIndex: "date",
        key: "date",
        render: (text) => <p>{text}</p>,
      },
      {
        title: "Время",
        dataIndex: "time",
        key: "time",
      },
      {
        title: "Статус",
        dataIndex: "status",
        key: "status",
      },

      {
        title: "Домашняя команда",
        dataIndex: "team1",
        key: "team1",
      },
      {
        title: "Гостевая команда",
        dataIndex: "team2",
        key: "team2",
      },
      {
        title: "Счет",
        dataIndex: "scoreMatch",
        key: "scoreMatch",
      },
    ];

    function onRender(arr) {
      let items = arr.map((item) => {
        nameLiga = item.name;
        let score =
          item.hometeamFtscore || item.awayteamFtscore
            ? `${item.hometeamFtscore} : ${item.awayteamFtscore}`
            : "";
        let scoreOptionally =
          item.hometeamExtrascore === "not" && item.awayteamExtrascore === "not"
            ? ""
            : `${item.hometeamExtrascore} : ${item.awayteamExtrascore}`;

        return {
          key: item.id,
          date: item.date,
          time: item.time,
          status: item.status,
          team1: item.hometeamName,
          team2: item.awayteamName,
          scoreMatch: scoreOptionally ? `${score} (${scoreOptionally})` : score,
        };
      });
      return items;
    }

    let content = onRender(item);

    return (
      <BaseComponent
        content={content}
        id={id}
        setItemFunc={setItemFunc}
        columns={columns}
        nameTeam={nameTeam}
        nameLiga={nameLiga}
      />
    );
  };
};

export default withContainerItem;
