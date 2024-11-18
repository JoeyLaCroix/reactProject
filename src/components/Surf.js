import React, {useState, useEffect} from "react";
import axios from "axios";
import SurfList from "./SurfList";
import AddDialog from "../components/addDialog";
import "../css/surfadd.css";


const Surf = () => {
  const [surfers, setSurfers] = useState([]);

  const addSurfer = (surfer) =>{
    setSurfers ((surfer)=>[...surfers, surfer]);
};
const [showAddDialog, setShowAddDialog] = React.useState(false);

const openDialog = () => {
    setShowAddDialog(true);
};
const closeDialog = () => {
    setShowAddDialog(false);
};
  
  useEffect(() => {
    (async () => {
      const response = await axios.get("https://projectbackend-qwro.onrender.com/api/surfers");
      setSurfers(response.data);
    })();
  }, []);

  return (
    <div className="surfers-list">
      <div className="columns">
      <h1 id="surftitle">Our Surfers:</h1>
        <div id="button">
        <button id="add-surfer" onClick = {openDialog}>Become a SSC representative</button>
        
        {showAddDialog ?(<AddDialog closeDialog={closeDialog} addSurfer={addSurfer}/>):("")}
        </div>

        {surfers.map((surfList) => (
          <SurfList
            name={surfList.name}
            hometown={surfList.hometown}
            surftype={surfList.surftype}
            image={surfList.img_name}
            bio={surfList.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default Surf;