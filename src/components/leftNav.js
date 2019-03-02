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
      <NavLink to="../pages/index/">Home</NavLink>
      <NavLink to="../pages/writing/">Writing</NavLink>
      <NavLink to="../pages/projects/">Projects</NavLink>
      <NavLink to="../pages/listening/">Listening</NavLink>
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