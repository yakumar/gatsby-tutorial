import React from 'react'
import SingleTour from './singleTour'
import styles from '../css/items.module.css'

export default function Tours({newTours}) {
    console.log(newTours)

    return (
        <section className={styles.tours}>
            Tours from components
            <ul>
                <div className={styles.center}>
                {newTours.map(function(elem){
                    return <div key={elem.node.id}><SingleTour tour={elem.node}/> </div>               


                })}
                </div>
            
            </ul>
           
            
        </section>
    )
}
