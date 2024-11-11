import "../css/surfers.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import lanikai from "../images/lani-kai.jpg";
import kanoa from "../images/kanoa.jpg";
import SurfList from "../components/SurfList";
import Surf from "../components/Surf";

function Surfers() {
return(
    <>
    <Header />
    
    <div className="Surfers">
        <h1 id="surftitle">Our Surfers:</h1>
        <div id="main-surf-list">
             <section class="surfers">
                <h3>Kanoa Igarashi</h3>
                <h4>Hometown: Huntington Beach, California</h4>
                <img src={kanoa} alt="kanoa" />
                <h4>Surftype: Shortboard</h4>
                <p>Kanoa Igarashi is a professional surfer from Huntington Beach, California. He is widely regarded as one of the greatest surfers of all time and has won numerous world championships throughout his career. Kanoa is known for his smooth, powerful style and his ability to ride the biggest waves with ease. He is sponsored by several major surf brands and is considered one of the top surfers in the world.</p>
             </section>
             <section class="surfers">
                <h3>Lani kai</h3>
                <h4>Hometown: Paia, Hawaii</h4>
                <img src={lanikai} alt="lanikai" />
                <h4>Surftype: Shortboard</h4>
                <p>Lani Kai is a professional surfer from the island of Maui. She started surfing at a young age and quickly rose through the ranks to become one of the best to do it in Hawaii. Lani is known for her powerful style and her ability to pull off difficult maneuvers with ease. She is sponsored by several major surf brands and is considered one of the top surfers in the world.</p>
             </section>
        </div>
        <Surf />
        <Footer />
    </div>
    </>
)
}

export default Surfers;