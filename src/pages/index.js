import React from "react"
import { Link, graphql } from "gatsby"

import { linkResolver } from "../utils/linkResolver"
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
            type
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
            return (
              <li  key={index}>
                <Link to={linkResolver(article.node._meta)}>
                  {article.node.title[0].text}
                </Link>
              </li>
              )
          })
        }
      </div>
    </Layout>
  )
}
