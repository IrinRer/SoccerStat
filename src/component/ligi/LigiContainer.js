// import { useState, useEffect, useRef } from "react";
// import { connect } from "react-redux";
// import { getAllLigi } from "../../api/Api";
// import { getLigiThunk } from "../../redux/reducers/LigiReducer";
// import Ligi from "./Ligi";
// import { Card, Container, Row, Col } from "react-bootstrap";

// const LigiContainer = () => {
//   const [ligi, setLigi] = useState([]);

//   useEffect(() => {
//     onRequest();
//   }, []);

//   const onRequest = () => {
//     getAllLigi().then(onLigiListLoaded);
//   };

//   const onLigiListLoaded = (ligi) => {
//     setLigi(ligi);
//   };

//   function onRender(arr) {
//     let items = arr.map((item) => {
//       return (
//         <Col key={item.id} className='mb-4'>
//           <Card style={{ width: "18rem" }} className="m-auto shadow-lg">
//             <Card.Body className="d-flex flex-column align-items-center">
//               <Card.Title>{item.name}</Card.Title>
//               <Card.Text>{item.country}</Card.Text>
//               {/* <Card.Link href="#">Card Link</Card.Link>
//                 <Card.Link href="#">Another Link</Card.Link> */}
//             </Card.Body>
//           </Card>
//         </Col>
//       );
//     });

//     return items;
//   }

//   let content = onRender(ligi);
//   return (
//     <>
//       <Container className="bg-info pt-5 mt-5 rounded">
//         <Row>{content}</Row>
//       </Container>
//     </>
//   );
// };

// // useEffect(() => {
// //         props.getLigiThunk();
// // }, []);

// //   return (
// //     <Ligi id={props.id} name = {props.name} country = {props.country}/>
// //   );
// // };

// // let mapStateToProps = (state) => {
// //   return {
// //     id: state.ligi.id,
// //     name: state.ligi.name,
// //     country: state.ligi.area.name
// //   };
// // };

// // const LigiContainer = connect(mapStateToProps, {
// //     getLigiThunk
// // })(LigiAPI);

// export default LigiContainer;
