import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => (
  <>
    <div className="topSplash"></div>
    <main>{children}</main>
    <div className="triangle"></div>
    <div className="triangle2"></div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
