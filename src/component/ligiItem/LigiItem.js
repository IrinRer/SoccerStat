import { Container, Row, Col } from "react-bootstrap";
import { Table } from "antd";
import { getLiga } from "../../api/Api";
import BreadCrumbLigi from "../breadCrumb/BreadCrumbLigi";
import FillterDate from "../fillter/FillterDate";
import withBreadCrumb from "../../HOC/withBreadCrumb";
import withContainerItem from "../../HOC/withContainerItem";

const LigiItem = ({ id, setItemFunc, columns, content, nameLiga }) => {
  const BreadCrumbComponent = withBreadCrumb(BreadCrumbLigi, nameLiga);

  return (
    <>
      <BreadCrumbComponent />
      <FillterDate id={id} setLigiItem={setItemFunc} />
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

export const LigiItemContainer = withContainerItem(LigiItem, getLiga);
export default LigiItem;
