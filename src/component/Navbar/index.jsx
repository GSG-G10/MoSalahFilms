import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const Navbar = () => {
    return (
        <nav className="nav">
            <h3 className="logo"> MO<span>K</span>A</h3>
        <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/favorit"> My Favoirt </Link>
     </li>
     <input type="text" className="input-search" placeholder="Enter any type of food"/>
   </ul>   
   </nav>
    );
}

export default Navbar;
