import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

export default function Headers() {
    const {
        site: {siteMetadata: info}
    } = useStaticQuery(graphql`
    {
        site{
          siteMetadata{
            data
            description
            title
            author
          }
        }
      }
    
    `);
    return (
        <div>

        <h1>Author : {info.author}</h1>
        <h1>title : {info.title}</h1>
            
        </div>
    )
}
