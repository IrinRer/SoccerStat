import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { List } from "antd";
import withCardComponent from "../../../HOC/withCardComponent";

const CardComponent = ({ arrPageNumber }) => {
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
              country={item.country}
            />
            <Link to={`/${item.id}`} key={item.id}>
              <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
                <Card.Body className="d-flex flex-column align-items-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.country}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </List.Item>
        )}
      />
    </>
  );
};

export const CardComponentContainer = withCardComponent(CardComponent);
export default CardComponent;
