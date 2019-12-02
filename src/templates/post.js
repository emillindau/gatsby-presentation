import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div style={{ marginBottom: "3em" }}>
          {post.frontmatter.previous && (
            <Link to={post.frontmatter.previous}>Previous</Link>
          )}
          {post.frontmatter.next && (
            <Link style={{ float: "right" }} to={post.frontmatter.next}>
              Next
            </Link>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        previous
        next
      }
      excerpt
    }
  }
`
