import React from "react";
import {Link} from "react-router-dom"

function Navbar(){return(
    <div>
        <Link to="/">Home</Link><p></p>  
        
        <Link to="/contact">contact</Link>
        <p></p>  
        <Link to="/about">about</Link>
    </div>
)}


export default Navbar;