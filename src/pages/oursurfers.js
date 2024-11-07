import "../css/oursurfers.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo2RemoveBg from "../images/logo2-removebg.png";
import mesurf from "../images/mesurf.jpg";
import kellyslater from "../images/kellyslater.jpg";
import johnjohn from "../images/johnjohn.jpg";
import kanoa from "../images/kanoa.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function OurSurfers() {
    return (
        <>
        <Header />
    
        <div className="OurSurfers">
           <div id="surf-main">
            <section id="column2">
                <h1>Joseph LaCroix</h1>
                <img id="img-logo" src={mesurf} alt="surfer"/>
                <h2>Bio:</h2>
                <p>Joseph LaCroix, a surfer from Virginia Beach, grew up riding the Atlantic waves. Known for his skills and easygoing vibe, he’s a respected figure in the local surf community and often mentors younger surfers.</p>
            </section>
            <section id="column2">
                <h2>Our Sponsorships</h2>
                <p>At Southern Surf Co., we're proud to sponsor a talented team of surfers who embody the passion and spirit of the ocean. Our sponsored surfers aren’t just athletes—they’re ambassadors of the laid-back, adventurous lifestyle that our brand represents. By showcasing their journeys, we aim to inspire others to chase waves and live authentically, just like they do. These surfers bring our gear to life, testing it in real-world conditions and sharing their love for the sea with our community. Supporting them helps us stay connected to the surf culture, and it’s our way of giving back to the sport that drives our brand.</p>
            </section>
            <section id="column2">
                <h1>Kelly Slater</h1>
                <img id="img-logo" src={kellyslater} alt="surfer"/>
                <h2>Bio:</h2>
                <p>Kelly Slater is a legendary surfer from Florida, widely regarded as the greatest of all time. With 11 world titles, his career has set records for longevity and dominance. Known for his precision and innovation, Kelly has revolutionized competitive surfing.</p>
            </section>
        </div>
        <div id="surf-main">
            <section id="column2">
                <h1>John John Florence</h1>
                <img id="img-logo" src={johnjohn} alt="surfer"/>
                <h2>Bio:</h2>
                <p>John John Florence is a world-renowned surfer from Hawaii, famous for his powerful style and technical mastery. Raised on Oahu’s North Shore, he became a surfing prodigy, winning multiple world titles. Known for his versatility and innovation, John John is a global icon in the sport.</p>
            </section>
            <section id="column2">
                <h1>How to Apply to Be a Sponsored Surfer</h1>
                <p>Think you’ve got what it takes to represent Southern Surf Co. on the waves? We’re always looking for passionate surfers who live and breathe the surf lifestyle to join our team. If you’re dedicated to the ocean, active in the surf community, and ready to showcase our gear in your adventures, we want to hear from you! To apply, simply send us an email with your surf resume, social media links, and a brief description of why you’d make a great addition to the Southern Surf Co. family. Let’s ride the waves together!</p>
            </section>
            <section id="column2">
                <h1>Kanoa Igarashi</h1>
                <img id="img-logo" src={kanoa} alt="surfer"/>
                <h2>Bio:</h2>
                <p>Kanoa Igarashi is a professional surfer born in California with Japanese heritage. Known for his smooth style and competitive drive, he became a standout on the World Surf League. Kanoa also represented Japan in the Olympics, solidifying his global presence in the sport.</p>
            </section>
        </div>
        <div id="all-surfers">
            <h3>Meet Our Team:</h3>
            <Link to ="/surfers">Press to see all of our surfers.</Link>
        </div>
        <div id="aboutusimage">
            <img src={logo2RemoveBg} alt="surfer"/>
        </div>
        <Footer />
        </div>
        </>
    )
}

export default OurSurfers;