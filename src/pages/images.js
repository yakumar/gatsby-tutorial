import React from 'react'
import Layout from '../components/layout'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import image from '../images/image1.jpeg'
import styled from 'styled-components'


export default function Images() {
    const data = useStaticQuery(query)
    console.log(data.fluid.childImageSharp.fixed)
    return (
        <Layout>
        Images here::

        <Wrapper>

           <article> <Img fixed={data.fixed.childImageSharp.fixed}/></article>
           <article> <Img fixed={data.fixed.childImageSharp.fixed}/></article>
           <article> <Img fluid={data.fluid.childImageSharp.fluid}/></article>

            </Wrapper>
            
        </Layout>
    )
}
const Wrapper = styled.section`
    text-align: center;
    width:80vw;
    margin: 0 auto 10rem auto;
    article{
        border: 3px solid red;
        padding: 1rem 0;
    }
    @media (min-width: 992px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 1rem;
    }

`

 const query = graphql`
 {
    fixed: file(relativePath: { eq: "image1.jpeg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "image2.jpeg"}){
        childImageSharp{
            fluid{
                ...GatsbyImageSharpFluid
            }
        }
    }
  }`