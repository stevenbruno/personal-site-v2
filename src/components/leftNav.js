import React from "react"
import navStyles from "./leftNav.module.css"
import { Link } from "gatsby"

const NavLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
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
      <p>Social</p>
      <div>Icons</div>
    </div>
    <div>
      <p>Contact</p>
      <p>sbruno636@gmail.com</p>
    </div>
  </div>
)