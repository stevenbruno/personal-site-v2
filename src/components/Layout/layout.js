import React, { useState, useEffect, Component } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import LeftNav from "../LeftNav/leftNav"
import MobileNav from "../MobileNav/mobileNav"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { width: 0 }
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", this.handleResize.bind(this))
  }

  render() {
    return (
      <>
        <div className="topSplash"></div>
        <main>
          {this.state.width >= 1024 ? <LeftNav /> : <MobileNav />}
          {this.props.children}
        </main>
        <div className="triangle"></div>
        <div className="triangle2"></div>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
