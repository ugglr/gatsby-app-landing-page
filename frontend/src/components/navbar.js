import React from "react"

import "./navbar.css"

export default function navbar() {
  return (
    <>
      <div className="nav-container">
        <ul className="nav-ul">
          <li>Company Name</li>
          <li className="float-right">
            <a href="/">Menu1</a>
          </li>
          <li className="float-right">
            <a href="/">Menu2</a>
          </li>
          <li className="float-right">
            <a href="/">Menu3</a>
          </li>
        </ul>
      </div>
    </>
  )
}
