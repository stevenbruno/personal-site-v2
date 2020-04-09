import React from "react"
import articleStyles from "./article.module.css"

const Article = props => {
  return (
    <a className={articleStyles.articleLink} href={props.post.url}>
      <div className={articleStyles.article}>
        <h5 className={articleStyles.title}>{props.post.title}</h5>
        <div className={articleStyles.articleDetails}>
          <p className={articleStyles.publishDate}>
            {props.post.readable_publish_date}
          </p>
          <img
            className={articleStyles.reactionsImg}
            src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/reactions-stack-ee166e138ca182a567f74c986b6f810f670f4d199aca9c550cc7e6f49f34bd33.png"
            alt="heart"
          ></img>
          <p>{props.post.positive_reactions_count}</p>
        </div>
      </div>
    </a>
  )
}

export default Article
