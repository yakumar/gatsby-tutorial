import React from 'react'
import Navbar from './navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './layout.css'

export default function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>
            {children}
            </main>
            
        </>
    )
}
