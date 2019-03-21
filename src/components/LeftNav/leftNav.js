import React from "react"
import navStyles from "./leftNav.module.css"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

// create fontawesome library
library.add(
  fab
)

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
      <div className={navStyles.social}>
        <a href="https://www.linkedin.com/in/stevenjbruno/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size='2x' />
        </a>
        <a href="https://dev.to/stevenbruno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'dev']} size='2x' />
        </a>
        <a href="https://github.com/stevenbruno" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github-square']} size='2x' />
        </a>
      </div>
    </div>
    <div>
      <h3>Contact</h3>
      <p className={navStyles.email}>
        <a href="mailto:sbruno636@gmail.com">sbruno636@gmail.com</a>
      </p>
    </div>
  </div>
)