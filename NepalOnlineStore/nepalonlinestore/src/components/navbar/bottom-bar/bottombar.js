import React from 'react';
import './bottombar.css';
import 'font-awesome/css/font-awesome.min.css';
const Bottombar = ()=>{
    return(
       <React.Fragment>
           <div class="bottomlist">
           
           <h2>NepalOnlineStore</h2>
            <ul >
            <li >
         <span class="fa fa-phone"> </span> Call Us : 9876543210
           
                </li>
            <li><span class=" fa fa-gift"> </span> SALES</li>
            <li><span class="fa fa-heart"> </span> WISHLIST</li>
            <li><span class="fa fa-shopping-cart"> </span> MY CART</li>
            </ul>
           </div>

           </React.Fragment>
    );
}

export default Bottombar;