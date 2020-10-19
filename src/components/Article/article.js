import React, { useState } from "react"
import articleStyles from "./article.module.css"

const Article = props => {
  const [hovered, setHovered] = useState(false)
  const handleHover = () => setHovered(!hovered)

  return (
    <a className={articleStyles.articleLink} href={props.post.url}>
      <div
        className={`${articleStyles.article} ${
          hovered ? `${articleStyles.hovered}` : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <h5 className={articleStyles.title}>{props.post.title}</h5>
        <div className={articleStyles.articleDetails}>
          <p className={articleStyles.publishDate}>
            {props.post.readable_publish_date}
          </p>
          <div className={articleStyles.hoverText}>
            <p>Read on DEV.to</p>
          </div>
          <div className={articleStyles.flex}>
            <p>
              {" "}
              <span className={articleStyles.heart}>&#128153;</span>{" "}
              {props.post.positive_reactions_count}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Article
