import React from "react"
import { graphql, Link } from "gatsby"
import { RichText } from "prismic-reactjs"
export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismic {
      allArticles(uid: $uid) {
        edges {
          node {
            title
            bodytext
          }
        }
      }
    }
  }
`
export default function Article({ data }) {
  const doc = data.prismic.allArticles.edges.slice(0, 1).pop()
  if (!doc) return null
  return (
    <div>
      <Link to="/">
        <span>go back</span>
      </Link>
      <h1>{RichText.asText(doc.node.title)}</h1>
      <span>
        <em>{doc.node.bodytext[0].text}</em>
      </span>
    </div>
  )
}