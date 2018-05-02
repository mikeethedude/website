import React from 'react'
import Link from 'gatsby-link'

import Section from '../components/section/section'
import Sponsors from '../components/sponsors/sponsors'

const IndexPage = ({ data }) => {
  const sections = data.allSectionsJson.edges

  return (
    <div>
      {sections.map(section => <Section data={section.node} />)}

      <h3>Our Sponsors</h3>
      <Sponsors level="Diamond" />
      <Sponsors level="Gold" />
      <Sponsors level="Silver" />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    allSectionsJson {
      edges {
        node {
          title
          content
          link {
            url
            external
            title
          }
          childImageSharp {
            sizes(maxWidth: 500) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
