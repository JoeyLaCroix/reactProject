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
        <Surf />
        </div>
        
        <Footer />
    </div>
    </>
)
}

export default Surfers;