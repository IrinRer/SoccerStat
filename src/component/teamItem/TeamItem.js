import { Container, Row, Col } from "react-bootstrap";
import { Table } from "antd";
import { getMatchTeam } from "../../api/Api";
import BreadCrumbTeam from "../breadCrumb/BreadCrumbTeam";
import FillterDate from "../fillter/FillterDate";
import withBreadCrumb from "../../HOC/withBreadCrumb";
import withContainerItem from "../../HOC/withContainerItem";

const TeamItem = ({ id, setItemFunc, columns, content, nameTeam }) => {
  const BreadCrumbComponent = withBreadCrumb(BreadCrumbTeam, nameTeam);
  return (
    <>
      <BreadCrumbComponent />
      <FillterDate id={id} setTeamItem={setItemFunc} />
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

export const TeamItemContainer = withContainerItem(TeamItem, getMatchTeam);
export default TeamItem;
