import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { List } from "antd";
import withCardComponent from "../../../HOC/withCardComponent";

const CardComponentTeams = ({ arrPageNumber }) => {
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 12,
        }}
        dataSource={arrPageNumber}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              name={<a href={item.name}>{item.name}</a>}
              badge={item.badge}
            />
            <Link to={`/teams/${item.id}`} key={item.id}>
              <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{item.name}</Card.Title>
                  <img
                    src={
                      item.badge
                        ? item.badge
                        : "https://apiv3.apifootball.com/badges/2802_hullbridge-sports.jpg"
                    }
                    alt="team-badge"
                    className="mt-3"
                  />
                </Card.Body>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </>
  );
};

export const CardComponentContainer = withCardComponent(CardComponentTeams);
export default CardComponentTeams;
