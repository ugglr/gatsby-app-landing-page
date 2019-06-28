import React from "react"

import { Jumbotron, Row, Col } from "react-bootstrap"

//import CSS
import "./jumbo.css"

export default function jumbo() {
  return (
    <Jumbotron className="jumbotron">
      <Row>
        <Col style={{ marginTop: "10rem" }}>
          <h1 className="text-center">The most awesome app</h1>
          <br />
          <h4 className="text-center">In the world</h4>
        </Col>
        <Col>
          <img src="" alt="Smiley face" />
        </Col>
      </Row>
    </Jumbotron>
  )
}
