import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      style={{ textShadow: "none", color: "white", textDecoration: "none" }}
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(211,33,106,0.9)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textShadow: "none",
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul style={{ listStyle: "none", float: "right" }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/gatsby-presentation">Presentation</ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
