import React from "react";
import { Row, Col } from "react-bootstrap";
import Slider from "./Slider";

export default props => (
  <Row className="mx-0">
    <Col sm={3} className="border">
      audit
    </Col>
    <Col sm={9} className="border">
      <Slider />
    </Col>
  </Row>
);
