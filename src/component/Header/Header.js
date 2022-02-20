import { Container, Row, Col } from "react-bootstrap";
import classes from "./Header.module.css";
import logo from "./logo/slack.png";
import NavComponent from "./Nav/Nav";

const HeaderComponent = () => {
  return (
    <>
      <Container fluid>
        <Row className="d-flex align-items-center">
          <Col lg="1">
            <img src={logo} alt="logo" />
          </Col>
          <Col>
            <NavComponent />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeaderComponent;
