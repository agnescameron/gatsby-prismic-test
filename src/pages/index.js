import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import { RichText } from "prismic-reactjs"

export const query = graphql` 
{
  prismic {
    allArticles {
      edges {
        node {
          title
          _meta {
            tags
            uid
          }
        }
      }
    }
  }
}`

export default function Home({ data }) {
  const articles = data.prismic.allArticles.edges
  if (!articles) return null
  else return (
    <Layout>
      <div>
        { 
          articles.map( (article, index) => { 
            return <h1 key={index}>{article.node.title[0].text}</h1>
          })
        }
      </div>
    </Layout>
  )
}
