import {  Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getAllLigi } from "../../../api/Api";
import { Pagination } from 'antd';

const PaginationComponent = ({ getIndex }) => {
  const [countLigi, setCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [ligiPer] = useState(15);

  useEffect(() => {
    onRequest();
  }, []);

  useEffect(() => {
    getLastAndFirstIndex(firstLigiIndex, lastLigiIndex);
  }, [currentPage]);

  const onRequest = () => {
    getAllLigi().then(getCount);
  };

  const getCount = (num) => {
    setCount(num.length);
  };

  const getLastAndFirstIndex = (first, last) => {
    getIndex(first, last);
  };

  const lastLigiIndex = currentPage * ligiPer;
  const firstLigiIndex = lastLigiIndex - ligiPer;

  const paginate = (num) => {
    setCurrentPage(num);
  };

  const arrPageNumber = [];

  for (let i = 1; i <= Math.ceil(countLigi / ligiPer); i++) {
    if (i <= 17) {
      arrPageNumber.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => {
            paginate(i);
          }}
        >
          {i}
        </Pagination.Item>
      );
    }
  }

  return (
    <Container className="d-flex justify-content-center mt-5">
      <Row>
        {/* <Pagination>{arrPageNumber}</Pagination> */}
        <Pagination
      showSizeChanger
      defaultCurrent={1}
      total={countLigi}
    />
      </Row>
    </Container>
  );
};

export default PaginationComponent;
