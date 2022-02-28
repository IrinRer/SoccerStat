import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { getLiga } from "../../api/Api";
import BreadCrumbLigi from "../breadCrumb/BreadCrumbLigi";
import Spinner from "../spinner/Spinner";
import FillterDate from "../fillter/FillterDate";
import NotFound from "../pageNotFound/NotFound";

const LigiItem = () => {
  const { id } = useParams();
  const [liga, setLiga] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    onRequest();
  }, [id]);

  const onRequest = () => {
    setLoading(true);
    getLiga(id).then(setLigiItem).catch(setErrorMess);
  };

  const setLigiItem = (liga) => {
    setLiga(liga);
    setLoading(false);
  };

  const setErrorMess = () => {
    setError(true);
  };

  if (!liga && !error) {
    return <Spinner />;
  } else if (error) {
    return <NotFound />;
  }

  let nameLiga = "";

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
        item.hometeamExtrascore || item.awayteamExtrascore
          ? `${item.hometeamExtrascore} : ${item.awayteamExtrascore}`
          : "";

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

  let content = onRender(liga);

  return (
    <>
      <BreadCrumbLigi nameLiga={nameLiga} />
      <FillterDate id={id} setLigiItem={setLigiItem} />
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

export default LigiItem;
