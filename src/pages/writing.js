import React, { useState, useEffect } from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content"

const WritingPage = () => {
  const [articles, setArticles] = useState({})
  useEffect(() => {
    // get data from devto api
    fetch("https://dev.to/api/articles?username=stevenbruno")
      .then(response => response.json()) // parse JSON from request
      .then(resultData => {
        setArticles(resultData)
      })
  }, [])
  console.log({ articles })
  return (
    <Layout>
      <SEO title="Writing" />
      <LeftNav />
      <Content>
        <h1>Writing</h1>
      </Content>
    </Layout>
  )
}

export default WritingPage
