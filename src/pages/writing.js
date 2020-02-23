import React from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content"

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <LeftNav />
    <Content>
      <h1>Writing</h1>
    </Content>
  </Layout>
)

export default WritingPage
