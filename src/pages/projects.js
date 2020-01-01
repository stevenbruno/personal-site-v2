import React from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content";

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <LeftNav />
    <Content>
      <h1>Projects</h1>
      <p></p>
    </Content>
  </Layout>
)

export default ProjectsPage
