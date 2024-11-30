import "../css/surflist.css";
import React, { useState } from "react";
import EditHousePlan from "./EditSurferList";
import DeleteSurferList from "./DeleteSurferList";


const SurfList = (props) => {
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [SurfList, setSurfList] = useState(props);
    const [showSurferList, setSurferList] = useState(true);
  
    const openEditDialog = () => {
      setShowEditDialog(true);
    };
  
    const closeEditDialog = () => {
      setShowEditDialog(false);
    };
  
    const openDeleteDialog = () => {
      setShowDeleteDialog(true);
    };
  
    const closeDeleteDialog = () => {
      setShowDeleteDialog(false);
    };
  
    const hideSurferList = () => {
      setSurferList(false);
    }
  
    const editSurferList = (newSurferList) => {
      setSurferList(newSurferList);
    };  
  
    return (
<>
        {showSurferList ? (
        <div>
          {showDeleteDialog ? (
            <DeleteSurferList
              closeDialog={closeDeleteDialog}
              hideHousePlan = {hideSurferList}
              name={SurfList.name}
              id={SurfList._id}
            />
          ) : (
            ""
          )}

        <section className="surfers">
            <section id="change-buttons">
                  <a href="#" >
                    &#9998; 
                  </a>
                  
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715; 
                  </a>
            </section>
            <h3>Name:{props.name}</h3>
            <h4>Hometown:{props.hometown}</h4>
            <h4>SurfType:{props.surftype}</h4>
            <p><img src={"https://projectbackend-qwro.onrender.com/images/"+props.image} alt={props.name} /></p>
            <p>Bio:{props.bio}</p>
        </section>
            </div>
          ) : (
            ""
          )}
        </>
    );
};

export default SurfList;