import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftNav from "../components/leftNav"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <LeftNav />
  </Layout>
)

export default IndexPage
