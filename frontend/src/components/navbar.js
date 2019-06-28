import React from "react"

import "./navbar.css"

export default function navbar() {
  return (
    <>
      <div className="nav-container">
        <ul className="nav-ul">
          <li>Company Name</li>
          <li className="float-right">Menu1</li>
          <li className="float-right">Menu2</li>
          <li className="float-right">Menu3</li>
        </ul>
      </div>
    </>
  )
}
