import React from "react"
import SEO from "../components/seo"

import "./bootstrap.min.css"

import Navbar from "../components/navbar"
import Jumbo from "../components/jumbo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <Jumbo />
  </>
)

export default IndexPage
