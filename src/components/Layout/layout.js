import React, { useState, useEffect, Component } from "react"
import PropTypes from "prop-types"
import "./layout.css"
import LeftNav from "../LeftNav/leftNav"
import MobileNav from "../MobileNav/mobileNav"

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { width: null }
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    this.setState({ width: window.innerWidth })
    window.addEventListener("resize", this.handleResize.bind(this))
  }

  componentDidUpdate() {
    if (this.state.width != window.innerWidth) {
      this.setState({ width: window.innerWidth })
    }
  }

  render() {
    return (
      <>
        <div className="topSplash"></div>
        <main>
          {this.state.width ? (
            this.state.width >= 1024 ? (
              <LeftNav />
            ) : (
              <MobileNav />
            )
          ) : null}
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
