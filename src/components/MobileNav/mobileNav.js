import React from "react"
import { Link } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import mobileStyles from "./mobileNav.module.css"

// create fontawesome library
library.add(fab)

const NavLink = props => (
  <li>
    <Link to={props.to} activeClassName={mobileStyles.active}>
      {props.children}
    </Link>
  </li>
)

export default () => (
  <div>
    <nav className={mobileStyles.mobileNav}>
      <NavLink to="/">
        <span className={mobileStyles.homeIcon}>&#127968;</span>
      </NavLink>
      <NavLink to="/writing/">Writing</NavLink>
      <NavLink to="/projects/">Projects</NavLink>
    </nav>
  </div>
)
