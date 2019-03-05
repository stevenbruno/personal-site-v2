import React from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content";

const ListeningPage = () => (
  <Layout>
    <SEO title="Listening" />
    <LeftNav />
    <Content>
      <h1>Listening</h1>
    </Content>
  </Layout>
)

export default ListeningPage
