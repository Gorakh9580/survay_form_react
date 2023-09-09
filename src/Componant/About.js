import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const About = ()=>{
    return (
    <>
    <div>
    
    <div id='toggle'>
    <label htmlFor='check'>
    <span></span>
    <span></span>
    <span></span>
    </label>
    </div>
    
    <input type="checkbox" id="check"/>
    <ul id='nav'>
    <li><Link to='#' className="g"><strong>Gorakh</strong></Link></li>
      <li><Link to="/register" className='a'>Register</Link></li>
         <li><Link to="/login" className='a'>Login</Link></li>
      </ul>
    </div>
    </>
    )
}

export default About;