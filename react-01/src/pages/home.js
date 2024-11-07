import "../css/home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pipeline from "../images/pipeline.jpg";
import nazare from "../images/nazare.jpg";
import sschat from "../images/sschat.png";
import logo2RemoveBg from "../images/logo2-removebg.png";
import sscshirt from "../images/sscshirt.png";
import sschoodie from "../images/sschoodie.png";  
import firststreetjetty from "../images/first street jetty.jpg";
import croatanjetty from "../images/croatanjetty.jpg";
import fsndpier from "../images/42ndpier.jpg";
import logoremovebg from "../images/logo-removebg.png";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <>
    <Header />
    
    <div className="Home">
      <div id="middleimages">
        <section id="middlemain">
          <img id="locations" src={pipeline} alt="Pipeline" />
        </section>
        <section id="middlemain">
          <h3>Welcome!</h3>
          <p>
            Where the ocean inspires every wave of our clothing. Whether you're
            catching barrels or just chilling by the shore, our surf gear is
            designed for both adventure and comfort. Dive into our collection of
            eco-friendly, durable fabrics made for the beach life. We're all about
            celebrating the surf culture, so explore our styles and ride the wave
            in confidence. Thanks for stopping by, and we hope Southern Surf Co
            becomes your go-to for all things coastal! 🌊
          </p>
        </section>
        <section id="middlemain">
          <img id="locations" src={nazare} alt="Nazare" />
        </section>
      </div>

      <div id="main-bottom">
        <section id="shoplink">
          <Link to="/nci">
            <h3>Hats</h3>
            <img id="this" src={sschat} alt="Hats" />
          </Link>
        </section>
        <section id="shoplink">
          <img src={logo2RemoveBg} alt="Logo" />
        </section>
        <section id="shoplink">
        <Link to="/nci">
            <h3>Shirts</h3>
            <img id="this" src={sscshirt} alt="Shirts" />
          </Link>
        </section>
        <section id="shoplink">
           <img src={logo2RemoveBg} alt="Logo" />
        </section>
        <section id="shoplink">
        <Link to="/nci">
            <h3>Hoodies</h3>
            <img id="this" src={sschoodie} alt="Hoodies" />
          </Link>
        </section>
      </div>

      <div id="spots">
        <h3>Famous Surfing locations we represent:</h3>
        <section id="spot">
          <h4>First Street Jetty</h4>
          <img src={firststreetjetty} alt="First Street Jetty" />
          <br />
          <a href="https://www.surfline.com/surf-report/1st-street-jetty/584204214e65fad6a7709ce7?camId=5df27801194164e61b2403c1">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
        <section id="spot">
          <h4>Croatan Jetty</h4>
          <img src={croatanjetty} alt="Croatan Jetty" />
          <br />
          <a href="https://www.surfline.com/surf-report/croatan-jetty/584204214e65fad6a7709ce9">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
        <section id="spot">
          <h4>42nd Street Pier</h4>
          <img src={fsndpier} alt="42nd Street Pier" />
          <br />
          <a href="https://www.surfline.com/surf-report/north-end/5842041f4e65fad6a7708a23?camId=5834995b3421b20545c4b53b">
            Tap to view Cam &copy;Surfline
          </a>
        </section>
      </div>

      <div id="aboutusimage">
        <img src={logoremovebg} alt="Southern Surf Co Logo" />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Home;



