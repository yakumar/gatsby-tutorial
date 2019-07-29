import React from 'react'
import Img from 'gatsby-image'
import {FaMap} from 'react-icons/fa'
import styles from '../css/tour.module.css'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

export default function SingleTour({tour}) {
    const {name, price, country, slug, days, images} = tour
    const mainImage = images[0].fluid
    return (
        <article className={styles.tour}>
            <div className={styles.imgContainer}>
                
                <Img className={styles.img} alt={name} fluid={mainImage}/>
                <Link className={styles.link} to={`/MyTours/${slug}`}>Details</Link>


            </div>
            <div className={styles.footer}>
            <h3>{name}</h3>
            <div className={styles.info}> <h4 className={styles.country}> 
                <FaMap className={styles.icon}></FaMap>{country}</h4>
                <div className={styles.details}>
                <h6>{days} days</h6>
                <h6>{price}</h6>
                
                </div>
                
                
                </div>
            
            </div>
            


            
        </article>
    )
}
SingleTour.propTypes = {
    tour: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price:PropTypes.number.isRequired
    })
}