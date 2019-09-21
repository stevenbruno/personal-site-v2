import * as React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import LeftNav from "../components/LeftNav/leftNav"
import Content from "../components/Content/content"
import headshot from '../data/headshot2.jpg' 
import indexStyles from './indexStyles.module.css'

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
    <Content>
      <section className={indexStyles.intro} >
        <h1>Steven Bruno</h1>
        <p>
          I'm a product designer and developer working in Chicago. 
          Before this, I studied Civil Engineering (Northwestern University '18)
        </p>
        <p>
          I employ thorough research and Lean UX principles to guide products from
          conception to production and beyond. 
        </p>
        <p>
        Outside of work, I like to read, make music, 
        and play soccer. Reach me at <b>sbruno636@gmail.com</b>. 
        </p>
      </section>
      <img src={headshot} alt="headshot" className={indexStyles.headshot} />
    </Content>
  </Layout>
)

export default IndexPage