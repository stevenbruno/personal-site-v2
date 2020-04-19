import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import LeftNav from "../LeftNav/leftNav"
import MobileNav from "../MobileNav/mobileNav"

const Layout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth)
  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })
  return (
    <>
      <div className="topSplash"></div>
      <main>
        {width >= 1024 ? <LeftNav /> : <MobileNav />}
        {children}
      </main>
      <div className="triangle"></div>
      <div className="triangle2"></div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
