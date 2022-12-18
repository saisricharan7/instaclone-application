import React from 'react';
import "./landing.css";
import landing_img from "./landing_img.png"
import { Link } from "react-router-dom";
function Landing(){
    return(
        <div className='landing'>
            <section className='landing_img'>
                <img src={landing_img} alt='main'></img>
                <section className='routing'>
                <h1>10x team</h1>
                <Link to={"/post"}><button>Enter</button></Link>
                
            </section>

            </section>
            
               
        </div>
    )
}

export default Landing