import React from "react"
import projectStyles from "./project.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Project = props => {
  const { name, description, githubURL, landingURL, tags } = props.repo
  return (
    <div className={projectStyles.project}>
      <div className={projectStyles.leftDetails}>
        <h5 className={projectStyles.title}>{name}</h5>
        <div className={projectStyles.projectDetails}>
          <p>{description}</p>
        </div>
        <div className={projectStyles.tagsRow}>
          <div className={projectStyles.tags}>
            {tags.map(tag => (
              <div className={projectStyles.tagContainer}>
                <p className={projectStyles.tag}>#{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={projectStyles.buttons}>
        <div className={projectStyles.source}>
          <a className={projectStyles.sourceLink} href={githubURL}>
            <FontAwesomeIcon
              className={projectStyles.sourceIcon}
              icon={["fab", "github"]}
              size="md"
            />
            <p className={projectStyles.sourceText}>Source</p>
          </a>
        </div>
        <div
          className={`${projectStyles.siteButton} ${
            landingURL === null ? `${projectStyles.inactive}` : null
          }`}
        >
          <a href={landingURL}>View site</a>
        </div>
      </div>
    </div>
  )
}

export default Project
