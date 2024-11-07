import "../css/checkout.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import fish from "../images/fishimg.png";
import Image2Removebg from "../images/logo2-removebg.png";

function Checkout() {
  return (
    <>
    <Header />
    
   <div className="Checkout">
    <div id="checkout-main">
            <section id="column1">
                
            </section> 
            <section id="column1">
                <h1>Form goes here</h1>
            </section> 
            <section id="column1">
                
            </section>            
        </div>
        <div id="aboutusimage">
            <img src={fish} alt="fish"/>
            <img src={Image2Removebg} alt="logo"/>
            <img src={fish} alt="fish"/>
        </div>
        <Footer />
   </div> 
   </>
 );
}

export default Checkout;