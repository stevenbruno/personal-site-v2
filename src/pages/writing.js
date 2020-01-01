import React from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content";
import BlogCard from "../components/Blog-Card/blogCard";

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <LeftNav />
    <Content>
      <h1>Writing</h1>
      <p></p>
      <BlogCard></BlogCard> {/* https://www.youtube.com/watch?v=n1NaVkKdrwc */}
    </Content>
  </Layout>
)

export default WritingPage
