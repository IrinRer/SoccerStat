import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import { getLiga } from "../../api/Api";
import BreadCrumbMatch from "../breadCrumb/BreadCrumbMatch";
import Spinner from "../spinner/Spinner";

const LigiItem = () => {
  const { id } = useParams();
  const [liga, setLiga] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    console.log(`onrequest`);
    setLoading(true);
    getLiga(id).then(setLigiItem);
  };

  const setLigiItem = (liga) => {
    console.log(`setligiitem`);
    setLiga(liga);
    setLoading(false);
  };

  if (!liga) {
    return <Spinner />;
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
      dataIndex: "score",
      key: "score",
    },
  ];

  function onRender(arr) {
    let items = arr.map((item) => {
      nameLiga = item.name;
      return {
        key: item.id,
        date: item.date,
        time: item.time,
        status: item.status,
        team1: item.hometeamName,
        team2: item.awayteamName,
        score: `${item.hometeamFtscore} : ${item.awayteamFtscore} ${item.hometeamExtrascore}  ${item.awayteamExtrascore}`,
      };
    });
    return items;
  }

  let content = onRender(liga);
  console.log(content);
  return (
    <>
      <BreadCrumbMatch nameLiga={nameLiga} />
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
