import { LikeTwoTone } from "@ant-design/icons/lib/icons";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getLiga } from "../../api/Api";
import BreadCrumbMatch from "../breadCrumb/BreadCrumbMatch";
import Spinner from "../spinner/Spinner";

const LigiItem = () => {
  const { id } = useParams();
  const [liga, setLiga] = useState(null);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    onRequest();
  },[]);

  const onRequest = () => {
    console.log(`onrequest`);
    setLoading(true);
    getLiga(id).then(setLigiItem); 
  };

  const setLigiItem = (liga) => {
    console.log(`setligiitem`);
    setLiga(liga);
    setLoading(false);
  };


  if(!liga) {
    return <Spinner/>
  }
  let nameLiga = '';

  function onRender(arr) {
    debugger;
    let items = arr.map((item) => {
      nameLiga = item.name
      return (
        <Col key={item.id} className="mb-4">
            <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title>{item.awayteamName}</Card.Title>
                <Card.Text>{item.hometeamName}</Card.Text>
              </Card.Body>
            </Card>
        </Col>
      );
    });

    return items;
  }

 let content = onRender(liga);

  return (
  <>
     <BreadCrumbMatch nameLiga={nameLiga}/>
    {content}
  </>
  );
};

// const View = ({ liga }) => {
//   const { name, status, awayteamName } = liga;

//   return (
//     <Col className="mb-4">
//       <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
//         <Card.Body className="d-flex flex-column align-items-center">
//           <Card.Title>{name}</Card.Title>
//           <Card.Text>{status}</Card.Text>
//           <Card.Text>{awayteamName}</Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };


export default LigiItem;
