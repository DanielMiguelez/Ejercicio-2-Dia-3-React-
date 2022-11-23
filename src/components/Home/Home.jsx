import React from "react";
import { Link } from "react-router-dom";
import './Home.css'


const Home = () => {
    return(
        <div className="homeestilos">
            <h1>Bienvenido al restaurante de Daniel</h1>
            <span><Link to="/reserve">Reserve Your table</Link></span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque non laborum, officiis quaerat quos, labore ducimus modi obcaecati nobis delectus officia voluptas dignissimos ab quae sequi velit recusandae ad facilis!</p>
            <br />
            <hr />
            <h3>Conoce la historia del fundador </h3>
            <span><Link to="/dani">Dani el fundador</Link></span>
            <br />
            <hr />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas voluptatum architecto aliquam quae eveniet iste, optio ratione cum itaque? In sunt ipsum quos odio veritatis sit ad quasi cupiditate minima.</p>
            <img src="" alt="" srcset="" />

            
        </div>

        
    )
      };

export default Home;