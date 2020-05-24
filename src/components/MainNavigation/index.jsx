import React from "react"
import { Link } from "gatsby"
import Layout from "../Layout"

const MainNavigation = () => (
  <Layout>
    <Link to="/about">About</Link>
    <Link to="/products">Product</Link>
  </Layout>
)

export default MainNavigation