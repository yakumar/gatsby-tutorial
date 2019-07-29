import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

import styles from '../components/css/template.module.css'
import Image from 'gatsby-image'
import {FaMoneyBillWave, FaMap} from 'react-icons/fa'
import {Link} from 'gatsby'

const TourTemplate = ({data}) => {
    console.log(`from tour template: ${data}`)
    const {name, price, days, description, country,
        images, start, journey} = data.tour
    return (
        <Layout>
           <section className={styles.template}>
            <div className={styles.center}>
                <div className={styles.images}>
                    {images.map((img, index)=>{
                        return <Image key={index} fluid={img.fluid} alt={name} className={styles.image}/>


                    })}
                
                
                </div>

                <div className={styles.info}> 
                    <h3><p> {name}</p></h3>
                    <FaMoneyBillWave className={styles.icon}></FaMoneyBillWave><h3><p>cost: $ {price}</p></h3>
                    <h3><p>Country: {country}</p></h3>
                    <h4>Description</h4>
            
            </div>

            

           
           <h4>starts by: {start}</h4>


            
            </div>
            
           </section>
            
        </Layout>
    )
}

export const query = graphql`
query($slug: String!){
    tour: contentfulTour(slug:{eq: $slug}) {
      name
      contentful_id
      price
      country
      slug
      start(formatString: "dddd MMMM Do, YYYY")
      featured
      days
      journey {
        day
        info
      }
      description {
        description
      }
  
      images {
        fluid {
            ...GatsbyContentfulFluid
        }
      }
    }
  }
  

`

export default TourTemplate
