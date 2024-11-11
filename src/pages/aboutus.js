import "../css/aboutus.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo2RemoveBg from "../images/logo2-removebg.png";
import Contact from "../components/Contact";

function Aboutus() {
return(
    <>
    <Header />
    
   <div className = "AboutUs">
   <div id="aboutus-main">
   <section id="p">
       <u><h1>About Us:</h1></u>
       <p>Welcome to Southern Surf Co., your go-to destination for laid-back, beach-inspired clothing. Based in the heart of Virginia Beach, VA, we blend coastal vibes with Southern charm to create apparel that captures the spirit of the surf and sand. Our collection is designed for those who live for sun-kissed days, ocean breezes, and the freedom of the waves. Whether you're hitting the beach or hanging with friends, Southern Surf Co. brings you stylish, comfortable clothing that keeps the surf lifestyle alive wherever you go. Dive into our world and let the coast inspire your every look!</p>
   </section>
   <section id="p">
       <u><h1>Our Mission:</h1></u>
       <p>At Southern Surf Co., our mission is to bring the carefree spirit of the beach into everyday life through quality, coastal-inspired clothing. We are passionate about creating apparel that embodies the sun, surf, and sand, offering comfort and style for those who embrace the laid-back, coastal lifestyle. With a commitment to sustainability and a love for our local Virginia Beach community, we strive to make a positive impact both in the fashion world and in preserving the beauty of our oceans. Our goal is to connect people with the freedom of the waves, no matter where they are.</p>
   </section>
   <section id="p">
       <u><h1>How We Give Back:</h1></u>
       <p>At Southern Surf Co., we believe in protecting the very thing that inspires us—the ocean. That’s why we’ve committed to giving back by donating a percentage of our proceeds to organizations dedicated to cleaning and preserving our oceans. Every purchase you make helps fund vital efforts to remove plastic waste, restore marine ecosystems, and protect wildlife. We’re passionate about ensuring future generations can enjoy the beauty of the beach just as we do today. By choosing Southern Surf Co., you're not just wearing the spirit of the coast—you’re helping to protect it.</p>
   </section>
   <section id="p">
       <u><h1>Location</h1></u>
       <p>Virginia Beach, Virginia, with its vibrant surf culture and Atlantic waves, is the perfect base for Southern Surf Co. Inspired by the coastal lifestyle, Southern Surf Co. designs apparel and gear that capture the spirit of Virginia Beach’s surf community, bringing a piece of that energy to surfers everywhere.</p>
   </section>
   </div>

    <Contact />

   <section id="aboutusimage">
            <img id="this" src={logo2RemoveBg} alt="logo"/>
    </section>
        <Footer />
   </div>
   </>
)
}

export default Aboutus;