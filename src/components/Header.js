import "../css/header.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo2RemoveBg from "../images/logo2-removebg.png";


function Header() {
    return(
        <div className="Header">
            <header id="main-header">
            <div id="title">
                <section><img src={logo2RemoveBg} alt="logo"/></section>
                <section><h1>Southern Surf Co.</h1></section>
                <section><img src={logo2RemoveBg} alt="logo"/></section>
            </div>
            
            <nav id="header-nav">
                <div id="nav-toggle">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul id="long-items">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/aboutus">About Us</Link></li> 
                    <li><Link to="/nci">Our Items</Link></li> 
                    <li><Link to="/oursurfers">Our Surfers</Link></li> 
                    <li><Link to="/checkout">Checkout</Link></li>
                </ul>  

                <nav id="main-items" class="hidden">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/aboutus">About Us</Link></li> 
                    <li><Link to="/checkout">Checkout</Link></li> 
                    <li><Link to="/nci">Our Items</Link></li> 
                    <li><Link to="/oursurfers">Our Surfers</Link></li> 
                </nav>
            </nav>
        </header>
        </div>
    )
}

export default Header;