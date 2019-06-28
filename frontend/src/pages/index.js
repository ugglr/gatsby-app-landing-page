import React from "react"
import SEO from "../components/seo"

import "./bootstrap.min.css"

import Navbar from "../components/navbar"
import Jumbo from "../components/jumbo"
import Content from "../components/content"
import Footer from "../components/footer"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Navbar />
    <Jumbo />
    <Content />
    <Footer />
  </>
)

export default IndexPage
