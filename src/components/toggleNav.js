import "../css/togglenav.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from "react";

function ToggleNav() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
      <>
      <div className="ToggleNav">
      <nav id="header-nav">
                <div id="nav-toggle" className="navbar-toggle" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`nav-links ${isOpen ? "active" : ""}`}> 
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/aboutus">About Us</Link></li> 
                    <li><Link to="/checkout">Checkout</Link></li> 
                    <li><Link to="/nci">Our Items</Link></li> 
                    <li><Link to="/oursurfers">Our Surfers</Link></li> 
                    </ul> 
                </nav>
    </div>
    </>

    );
  }
  
  export default ToggleNav;