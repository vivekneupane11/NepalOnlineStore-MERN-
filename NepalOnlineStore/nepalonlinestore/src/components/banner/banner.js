import React from 'react';
import Categories from './banner-left/Categories';
import SearchPromo from './banner-right/SearchPromo';
import './banner.css';
const Banner = ()=>{
    return(
        <div class="banner">

            <Categories/>
      
           
            <SearchPromo/>
      
            </div>
    );
}

export default Banner;