import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
    <div>
      <h1>Steven Bruno</h1>
      <p>
        I'm a web designer and developer working in Chicago. 
        Before this, I studied Civil Engineering (Northwestern University '18)
      </p>
      <p>
        At work, I focus on front-end web technologies, but at home, 
        I enjoy anything and everything Python. 
      </p>
      <p>
        Reach me at <span>sbruno636@gmail.com</span>
      </p>
    </div>
  </Layout>
)

export default IndexPage
