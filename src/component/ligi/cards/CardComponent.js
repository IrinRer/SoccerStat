import { Card, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComponent = ({ fillter }) => {
  function onRender(arr) {
    let items = arr.map((item) => {
      return (
        <Col key={item.id} className="mb-4">
          <Link to={`/ligi/${item.id}`}>
            <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.country}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      );
    });

    return items;
  }

  let content = onRender(fillter);
  return (
    <>
      <Container className="bg-info pt-5 mt-5 rounded">
        <Row>{content}</Row>
      </Container>
    </>
  );
};

export default CardComponent;
