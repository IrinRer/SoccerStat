import moment from "moment";
import "moment/locale/ru";
import locale from "antd/lib/locale/ru_RU";
import { DatePicker, ConfigProvider } from "antd";
import { Container, Row, Col } from "react-bootstrap";
import { getLiga } from "../../api/Api";
import { useEffect, useState } from "react";
const { RangePicker } = DatePicker;

const FillterDate = ({id, setLigiItem}) => {
const [dateFrom, setdateFrom] = useState(null);  
const [dateTo, setdateTo] = useState(null);    

useEffect(() => { 
    onRequest()
},[dateFrom, dateTo]);

const onRequest = () => {
    getLiga(id, dateFrom, dateTo).then(setLigiItem)
}

const setLigiItemFillter = (match) => {
    setLigiItem(match);
};

function onChange(date, dateString) {
    debugger;
    setdateFrom(dateString[0]);
    setdateTo(dateString[1]);
}


  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <ConfigProvider locale={locale}>
            <RangePicker renderExtraFooter={() => "extra footer"} defaultValue={moment('2022-02-03', '2022-03-04')} onChange={onChange}/>
          </ConfigProvider>
        </Col>
      </Row>
    </Container>
  );
};

export default FillterDate;
