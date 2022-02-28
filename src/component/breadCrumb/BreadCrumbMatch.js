import { Breadcrumb } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadCrumbMatch = ({nameLiga}) => {
  return (
    <Container className="mt-4 mb-5">
      <Row>
        <Col md="4">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Лиги</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/">{nameLiga}</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadCrumbMatch;
