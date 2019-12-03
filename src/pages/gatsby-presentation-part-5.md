---
title: "Gatsby HowTo"
date: "2019-12-02"
previous: "/gatsby-presentation-part-4"
next: null
---

# So how does it work?

- `npm i -g gatsby-cli`
- `gatsby new name`
- `gatsby develop`
- `gatsby build`

Bam! Just like that you have a site up and running (well almost at least). Just as this site woho

- `gatsby-config.js` — configure options for a Gatsby site, with metadata for project title, description, plugins, etc.

- `gatsby-node.js` — implement Gatsby’s Node.js APIs to customize and extend default settings affecting the build process

- `gatsby-browser.js` — customize and extend default settings affecting the browser, using Gatsby’s browser APIs

- `gatsby-ssr.js` — use Gatsby’s server-side rendering APIs to customize default settings affecting server-side rendering

## Pages

Pages (component) in the src/pages folder will automatically be created. But you can create pages dynamically via the `gatsby.node.js` file.

```javascript
exports.createPages = ({ actions }) => {
  // ...
}
```

## Routing

Routing are achieved via the <Link /> component, much like next.js. So for example `<Link to="/contact"></Link>` will link to the component in `src/pages/Contact.js`

## CSS

Use whatever you like basicallly, css-modules, css-in-js, just css, sass

## Plugins

This is where gatsby thrives, there is _a lot_ of plugins, for all sorts of things. Plugins are installed via npm and configured in the `gatsby-config.js` file. This site uses `gatsby-source-filesystem` for images and markdown as well as `gatsby-transformer-remark` for transforming markdown to html and metadata.

[Explore plugins](https://www.gatsbyjs.org/plugins/)

## GraphQL

There are two types, used as render-props or via hooks or the `graphql` function directly. StaticQueries (used in all other components than pages) and DynamicQueries used in pages.

```javascript
const data = useStaticQuery(graphql`
  query NonPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
```
