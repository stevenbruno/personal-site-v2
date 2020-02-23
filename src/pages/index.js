import * as React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import SEO from "../components/seo"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import Content from "../components/Content/content"
import headshot from "../data/headshot2.jpg"
import indexStyles from "./indexStyles.module.css"

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
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
          I employ thorough research and Lean UX principles to guide products
          from conception to production and beyond.
        </p>
        <p>
          In my spare time, I like to read, make music, and play soccer. If
          you'd like to get in touch, reach me at <b>sbruno636@gmail.com</b>.
        </p>
      </section>
      <img src={headshot} alt="headshot" className={indexStyles.headshot} />
    </Content>
  </Layout>
)

export default IndexPage
