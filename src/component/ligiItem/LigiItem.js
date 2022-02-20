import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getMatchesApi } from "../../api/Api";
import Spinner from "../spinner/Spinner";

const LigiItem = () => {
  const { id } = useParams();
  console.log(id);
  const [liga, setLiga] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    console.log(`onrequest`);
    setLoading(true);
    getMatchesApi(id).then(setLigiItem);
  };

  const setLigiItem = (liga) => {
    console.log(`setligiitem`);
    setLiga(liga);
    setLoading(false);
  };
   
 const content = !loading ? <Spinner /> : <View liga={liga}/>
  return (
  <>
    {content}
  </>
  );
};

const View = ({ liga }) => {
  const { startDate, endDate, id } = liga;

  return (
    <Col key={id} className="mb-4">
      <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
        <Card.Body className="d-flex flex-column align-items-center">
          <Card.Title>{startDate}</Card.Title>
          <Card.Text>{endDate}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LigiItem;
