import * as React from "react"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import LeftNav from "../components/LeftNav/leftNav"
import Content from "../components/Content/content"
import { graphql } from "gatsby"

// Prevent fontawesome from dynamically adding its css since we did it manually above
config.autoAddCss = false;

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
    <Content>
      <h1>Steven Bruno</h1>
      <p>
        I'm a product designer and developer working in Chicago. 
        Before this, I studied Civil Engineering (Northwestern University '18)
      </p>
      <p>
        At work, I focus on front-end web technologies, but at home, 
        I enjoy anything and everything Python. 
      </p>
      <p>
        Reach me at <b>sbruno636@gmail.com</b>
      </p>
    </Content>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "headshotV6.jpg" }) {
      childImageSharp {
        fixed(width: 600) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`