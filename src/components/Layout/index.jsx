import React from "react"
import PropTypes from "prop-types"
import Header from "../Header"
import MainNavigation from  '../MainNavigation'
import Footer from '../Footer'
import GlobalStyles from '../../styles/globalStyled'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <MainNavigation />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
