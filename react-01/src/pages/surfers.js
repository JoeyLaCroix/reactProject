import "../css/surfers.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Surfers() {
return(
    <>
    <Header />
    
    <div className="Surfers">
        <h1 id="surftitle">Our Surfers:</h1>
        <div id="main-surf-list">
             <strong><p>Json file pulling goes here --not needed according to assignment--</p></strong>
        </div>
        <Footer />
    </div>
    </>
)
}

export default Surfers;