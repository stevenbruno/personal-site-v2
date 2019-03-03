import React from "react"
import contentStyles from "./content.module.css"

export default props => (
  <div className={contentStyles.container}>
    {props.children}
  </div>
)