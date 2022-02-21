import { Breadcrumb } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Typography } from 'antd';
const { Text } = Typography;

const BreadCrumbLigi = () => {
    return (
        <Container className="mt-4 mb-5">
        <Row>
          <Col md="4">
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to="/ligi">Ligi</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </Container>
    )
}

export default BreadCrumbLigi;