import React from "react"

import { Jumbotron } from "react-bootstrap"

//import CSS
import "./jumbo.css"

export default function jumbo() {
  return (
    <Jumbotron className="jumbotron">
      <div style={{ marginTop: "10rem" }}>
        <h1 className="text-center">The most awesome app</h1>
        <h4 className="text-center">In the world</h4>
      </div>
    </Jumbotron>
  )
}
