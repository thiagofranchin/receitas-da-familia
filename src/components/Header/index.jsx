import PropTypes from "prop-types"
import React from "react"
import MainNavigation from '../MainNavigation'

const Header = ({ siteTitle }) => (
  <header>
   <MainNavigation />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
