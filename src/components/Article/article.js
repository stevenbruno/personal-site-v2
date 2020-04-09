import React from "react"
import articleStyles from "./article.module.css"

const Article = props => {
  return (
    <div className={articleStyles.article}>
      <a href={props.post.url}>
        <p>{props.post.title}</p>
        <div className={articleStyles.articleDetails}>
          <p>{props.post.readable_publish_date}</p>
          <img
            className={articleStyles.reactionsImg}
            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png"
            alt="heart"
          ></img>
          <p>{props.post.positive_reactions_count}</p>
        </div>
      </a>
    </div>
  )
}

export default Article
