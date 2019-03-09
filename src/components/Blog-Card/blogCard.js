import React from "react"
import styles from "./blogCard.module.css"

export default props => (
  <div className={styles.container}>
    {props.children}
  </div>
)