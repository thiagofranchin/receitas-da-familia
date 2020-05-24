import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>
  </Layout>
)

export default About