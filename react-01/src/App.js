import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Aboutus from "./pages/aboutus";
import Checkout from "./pages/checkout";
import Nci from "./pages/nci";
import Oursurfers from "./pages/oursurfers";
import Surfers from "./pages/surfers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/nci" element={<Nci />} />
        <Route path="/oursurfers" element={<Oursurfers />} />
        <Route path="/surfers" element={<Surfers />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
