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
            <img
              className={articleStyles.reactionsImg}
              src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png"
              alt="heart"
            ></img>
            <p>{props.post.positive_reactions_count}</p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default Article
