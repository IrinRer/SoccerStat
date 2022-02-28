import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchComponent = ({teams, ligi, getFillter }) => {
  const [value, setValue] = useState("");
  
  const content = teams || ligi;
  const filtered = content.filter((item) => {
    if (item) {
      return item.name.indexOf(value) > -1;
    }
  });

  useEffect(() => {
    getFillter(filtered);
  }, [value, content]);

  return (
    <Container className="mt-4 mb-5">
      <Row>
        <Col md="4">
          <Search
            placeholder="Найти"
            onChange={(e) => setValue(e.target.value)}
            style={{ width: 300 }}
            allowClear
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchComponent;