import "../css/nci.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo2RemoveBg from "../images/logo2-removebg.png";
import sscshirt from "../images/sscshirt.png";
import sschoodie from "../images/sschoodie.png"; 
import sschat from "../images/sschat.png";
import hatWhite from "../images/hatWhite.png";
import shirtBlack from "../images/shirtBlack.png";
import Hoodieblk from "../images/Hoodieblk.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function NCI() {
    return(
        <>
        <Header />
    
        <div className="NCI">
            <div id="nci-main">
            <section id="mainnci">
            <Link to="/checkout"> <h3>Hat</h3>
                <img src={sschat} alt="clothesimage"/>
                    <p>Price: $20.00</p>
                    <p>Color: Black</p>
                    <p>Size: One Size Fits All</p>
                </Link>
            </section>
            <section id="mainnci">
            <Link to="/checkout"><h3>Shirts</h3>
                <img src={sscshirt} alt="clothesimage"/>
                    <p>Price: $30.00</p>
                    <p>Color: White</p>
                    <p>Size: Small-Xl</p>
                </Link>
            </section>
            <section id="mainnci">
                <Link to="/checkout"><h3>Hoodies</h3>
                <img src={sschoodie} alt="clothesimage"/>
                    <p>Price: $40.00</p>
                    <p>Color: White</p>
                    <p>Size: Small-Xl</p>
                </Link>
            </section>
        </div>
        <div id="nci-main">
            <section id="mainnci">
            <Link to="/checkout"> <h3>Hat</h3>
                <img src={hatWhite} alt="clothesimage"/>
                    <p>Price: $20.00</p>
                    <p>Color: White</p>
                    <p>Size: One Size Fits All</p>
                </Link>
            </section>
            <section id="mainnci">
            <Link to="/checkout"><h3>Shirts</h3>
                <img src={shirtBlack} alt="clothesimage"/>
                    <p>Price: $30.00</p>
                    <p>Color: Black</p>
                    <p>Size: Small-Xl</p>
                </Link>
            </section>
            <section id="mainnci">
            <Link to="/checkout"><h3>Hoodies</h3>
                <img src={Hoodieblk} alt="clothesimage"/>
                    <p>Price: $40.00</p>
                    <p>Color: Black</p>
                    <p>Size: Small-Xl</p>
                    </Link>
            </section>
        </div>
        <div id="aboutusimage">
            <img src={logo2RemoveBg} alt="logoimage"/>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default NCI;