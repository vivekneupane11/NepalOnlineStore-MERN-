import React from 'react';
import Topbar from './top-bar/topbar';
import Bottombar from './bottom-bar/bottombar';
const Navbar = ()=>{
    return(
        <React.Fragment>
                 <Topbar/>
                    <Bottombar/>
   
        </React.Fragment>
    );
}
export default Navbar;