import * as React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import SEO from "../components/seo"
import Layout from "../components/Layout/layout"
import Content from "../components/Content/content"
import headshot from "../data/headshot2.jpg"
import indexStyles from "./indexStyles.module.css"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// create fontawesome library
library.add(fab)

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Content>
      <section className={indexStyles.intro}>
        <h1>Steven Bruno</h1>
        <p>
          I'm a designer and developer currently working at{" "}
          <a href="https://pos.toasttab.com/" className={indexStyles.Toast}>
            Toast
          </a>{" "}
          in Chicago. Before this, I studied Civil Engineering (Northwestern
          University '18).
        </p>
        <p>
          I apply thorough research and Lean UX principles to guide products
          from conception to production and beyond.
        </p>
        <p>
          When I'm not working on side projects, I like to climb, paint, and
          play soccer. If you'd like to get in touch, reach me at{" "}
          <a href="mailto:sbruno636@gmail.com" style={{ fontWeight: 600 }}>
            sbruno636@gmail.com
          </a>
          .
        </p>
      </section>
      <img src={headshot} alt="headshot" className={indexStyles.headshot} />
      <div className={indexStyles.social}>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/stevenjbruno/"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
        </a>
        <a aria-label="dev.to" href="https://dev.to/stevenbruno">
          <FontAwesomeIcon icon={["fab", "dev"]} size="lg" />
        </a>
        <a aria-label="github" href="https://github.com/stevenbruno">
          <FontAwesomeIcon icon={["fab", "github-square"]} size="lg" />
        </a>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
