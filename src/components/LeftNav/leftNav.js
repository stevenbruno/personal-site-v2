import React from "react"
import navStyles from "./leftNav.module.css"
import { Link } from "gatsby"

const NavLink = props => (
  <li>
    <Link to={props.to} activeClassName={navStyles.active}>{props.children}</Link>
  </li>
)

export default () => (
  <div className={navStyles.container}>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/writing/">Writing</NavLink>
      <NavLink to="/projects/">Projects</NavLink>
      <NavLink to="/listening/">Listening</NavLink>
    </nav>
    <div>
      <h3>Social</h3>
      <div>Icons</div>
    </div>
    <div>
      <h3>Contact</h3>
      <p>sbruno636@gmail.com</p>
    </div>
  </div>
)