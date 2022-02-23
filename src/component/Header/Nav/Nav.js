import { Nav } from "react-bootstrap";
import {LinkContainer  } from "react-router-bootstrap";

const NavComponent = () => {
    return (
      <>
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <LinkContainer  to="/">
              <Nav.Link>Лиги</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer  to="/teams">
              <Nav.Link>Команды</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </>
    );
  };

  export default NavComponent;