import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'


export default function products() {
    return (
        <Layout>
            Products page
            <Link to="/">Home</Link>
        </Layout>
    )
}
