import "../css/surfers.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddDialog from "../components/addDialog";
import lanikai from "../images/lani-kai.jpg";
import kanoa from "../images/kanoa.jpg";
import SurfList from "../components/SurfList";
import Surf from "../components/Surf";
import "../css/surfadd.css";



function Surfers() {


return(
    <>
    <Header />
    <div className="Surfers" id="add">
        <div id="main-surf-list">
        <Surf />
        </div>
        
        <Footer />
    </div>
    </>
)
}

export default Surfers;