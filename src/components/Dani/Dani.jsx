import React from "react";
import { Link } from "react-router-dom";
import './Dani.css'

const Daniel = () => {
    return(
      <nav>
        <div className="headerestilos">
            <span><Link to="/reserve">Reserve Your table</Link></span>
            <br />
            <br />
            <span><Link to="/">Home</Link></span>
        </div>
        <div>
            <h1>La historia del restaurante de Daniel</h1>
            <div className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis aliquid consequuntur quisquam culpa perferendis repudiandae impedit cupiditate eos optio at molestias, nulla cumque pariatur voluptates, accusantium nobis temporibus sapiente recusandae!</div>
            <img src="../../assets/Puttanesca.jpg" alt="" />
        </div>
    </nav>  
    
    )
      };
    
export default Daniel;