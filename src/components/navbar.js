import React from 'react'
import {Link} from 'gatsby'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                <li>
                <Link to="/">Home</Link>

                </li>
                <li>
                <Link to="/blog/">Blog</Link>
                
                </li>
                <li>
                <Link to="/products/">Products</Link>
                
                </li>
                <li>
                <Link to="/example/">Examples</Link>
                
                </li>
                <li>
                <Link to="/images/">Images</Link>
                
                </li>
                <li>
                <Link to="/MyTours/">MyTours</Link>
                
                </li>
               
                
                </ul>
            
            </nav>
            
        </div>
    )
}

export default Navbar
