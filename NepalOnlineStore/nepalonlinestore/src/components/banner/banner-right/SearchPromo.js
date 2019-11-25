import React from 'react';
import './SearchPromo.css';
const SearchPromo = ()=>{
    return(
        <React.Fragment >
            <div class="searchpromo">
        <input class="searchbar" type="text" placeholder="Search Products..."/>
        <div class="promo">
            <div class="promo1">
             <section>
             <h2>
                   Latest Product
                    </h2>
                    <button>View Latest </button>
                 </section>
                
                </div>
                <div class="promo2">
                <section>
             <h2>
                   Latest Product
                    </h2>
                    <button>View Latest </button>
                 </section>
                    </div>
            </div>
            </div>
            </React.Fragment>
    );
}
export default SearchPromo;