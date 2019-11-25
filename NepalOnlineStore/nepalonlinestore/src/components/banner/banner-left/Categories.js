import React from 'react';
import './Categories.css';
import womenimg from '../../../images/women.svg';
import menimg from '../../../images/men.svg';
import accessories from '../../../images/accessories.svg';

const Categories = ()=>{
    return(
        <div class="categories">
          
            <div class="header">CATEGORIES </div>
            <li> <img src={womenimg}/> Women</li>
            <li> <img src={menimg}/> Men </li>
            <li><img src={accessories}/> Accessories </li>
            <li><img src={accessories}/> Shoes </li>
            <li><img src={accessories}/> Sunglasses </li>
            <li><img src={accessories}/> Watches </li>
            <li><img src={accessories}/> Handmade Necklaces </li>
            <li><img src={accessories}/> New Arrival </li>
            <li><img src={accessories}/> Special Offers </li>
            
         
            
            </div>
    );
}

export default Categories;