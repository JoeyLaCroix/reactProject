import "../css/header.css";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo2RemoveBg from "../images/logo2-removebg.png";
import ToggleNav from "../components/toggleNav";

function Header() {
    return(
        <div className="Header">
            <header id="main-header">
            <div id="title">
                <section><img src={logo2RemoveBg} alt="logo"/></section>
                <section><h1>Southern Surf Co.</h1></section>
                <section><img src={logo2RemoveBg} alt="logo"/></section>
            </div>
            
            <ToggleNav />
        </header>
        </div>
    )
}

export default Header;