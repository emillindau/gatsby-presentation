import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people! Let's talk static site generators</h1>
    <p>
      I'm going to go through some of the basics, and then I'll need your help
      since this is not my expertise. But hey! Let's learn together!
    </p>
    <p>
      Don't @ me{" "}
      <a href="https://twitter.com">{data.site.siteMetadata.author}</a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default IndexPage
