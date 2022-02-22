import { Nav } from "react-bootstrap";
import {LinkContainer  } from "react-router-bootstrap";

const NavComponent = () => {
    return (
      <>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <LinkContainer  to="/ligi">
              <Nav.Link>Лиги</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item as="li">
            <LinkContainer  to="/team">
              <Nav.Link>Команды</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </>
    );
  };

  export default NavComponent;