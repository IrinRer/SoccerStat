import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { getMatchTeam, getNameTeam } from "../../api/Api";
import BreadCrumbTeam from "../breadCrumb/BreadCrumbTeam";
import Spinner from "../spinner/Spinner";
import FillterDate from "../fillter/FillterDate";
import NotFound from "../pageNotFound/NotFound";
import withBreadCrumb from "../../HOC/withBreadCrumb";

const TeamItem = () => {
  const { id } = useParams();
  const [team, setTeam] = useState(null);
  const [nameTeam, setName] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    onRequest();
    onGetName();
  }, [id]);

  const onRequest = () => {
    setLoading(true);
    getMatchTeam(id).then(setTeamItem).catch(setErrorMess);
  };

  const onGetName = () => {
    getNameTeam(id)
      .then(setNameTeam)
      .catch((error) => console.log(`Error ${error} ${error.status}`));
  };

  const setNameTeam = (team) => {
    debugger;
    setName(team[0].name);
  };

  const setTeamItem = (team) => {
    setTeam(team);
    setLoading(false);
  };

  const setErrorMess = () => {
    setError(true);
  };

  if (!team && !error) {
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

  let content = onRender(team);
  const BreadCrumbComponent = withBreadCrumb(BreadCrumbTeam, nameTeam); 


  return (
    <>
      <BreadCrumbComponent />
      <FillterDate id={id} setTeamItem={setTeamItem} />
      <Container>
        <Row>
          <Col>
            <Table columns={columns} dataSource={content} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TeamItem;
