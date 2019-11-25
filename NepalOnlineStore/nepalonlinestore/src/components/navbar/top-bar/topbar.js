import React from 'react';
import './top-bar.css';
const  Topbar = ()=>{
    return(
        <React.Fragment>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Portfolio</li>
                <li>Contact Us</li>

                <li class="end"> Sign In or Register</li>
        
                </ul>

            </React.Fragment>
    );
}
export default Topbar;