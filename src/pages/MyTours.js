import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../components/layout'
import Tours from '../components/tours/tours'


const MyTours = ({data}) =>{
    console.log(data)
    
    
    return (
        <Layout>
            Hi From Tours page
            <Tours newTours = {data.tours.edges}/>
            
        </Layout>
    )
}
export const query = graphql`
query {
    tours: allContentfulTour{
      edges{
        node{
        id: contentful_id  
          name
          price
          slug
          country
        
        start
        featured
        days
        description{
            description
            
          }
        journey{
            day
            info
          } 
          images{
           fluid{ 
               ...GatsbyContentfulFluid
             }
            }
          
        
        }
      }
    }
  }
`

export default MyTours