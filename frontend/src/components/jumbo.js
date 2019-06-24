import React from "react"

import bg from "../images/Component 1 – 1.svg"

import { Jumbotron } from "react-bootstrap"

export default function jumbo() {
  return (
    <Jumbotron
      className="jumbotron"
      style={{
        maxWidth: "100%",
        overflow: "hidden",
        padding: "0",
      }}
    >
      <img src={bg} style={{ width: "100%", zIndex: "-1" }} />
      <div style={{ marginTop: "10rem", zIndex: "1" }}>
        <h1 className="text-center">The most awesome app</h1>
        <h4 className="text-center">In the world</h4>
      </div>
    </Jumbotron>
  )
}
