import React, { Component } from 'react'
import Layout from '../components/layout'
import styles from '../components/blog.module.css'

export default class blog extends Component {
    render() {
        return (
            <Layout>
                <h1 className={styles.title}>this is our blog page</h1>
            </Layout>
        )
    }
}
