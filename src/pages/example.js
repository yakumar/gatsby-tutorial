import React from 'react'
import Header from '../examples/headers'
import {graphql} from 'gatsby'

function example(props) {
    console.log(props);
    return (
        <div>
            examples page
            <Header />
        </div>
    )
}
export const getData = graphql`
{
    site{
      siteMetadata{
        data
        description
        title
        author
      }
    }
  }`
  export default example
