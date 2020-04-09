import React, { useState, useEffect } from "react"
import LeftNav from "../components/LeftNav/leftNav"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Content from "../components/Content/content"
import Article from "../components/Article/article"

const WritingPage = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=stevenbruno")
      .then(response => response.json())
      .then(resultData => {
        setArticles(resultData)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Writing" />
      <LeftNav />
      <Content>
        <h1>Writing</h1>
        {articles.map(article => {
          return <Article key={article.id} post={article} />
        })}
      </Content>
    </Layout>
  )
}

export default WritingPage
