import "../css/surflist.css";
import React, { useState } from "react";
import EditHousePlan from "./EditSurferList";
import DeleteSurferList from "./DeleteSurferList";
import EditSurferList from "./EditSurferList";

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
              hideSurferList = {hideSurferList}
              name={SurfList.name}
              _id={SurfList._id}
            />
          ) : (
            ""
          )}

          {showEditDialog ? (
            <EditSurferList
              closeDialog={closeEditDialog}
              updateSurfer = {editSurferList}
              _id={SurfList._id}
              name={SurfList.name}
              hometown={SurfList.hometown}
              surftype={SurfList.surftype}
              image={SurfList.image_name}
              bio={SurfList.bio}
              
             
            />
          ) : (
            ""
          )}

        <section className="surfers">
            <section id="change-buttons">
            <a href="#" onClick={openEditDialog}>
                    &#9998; 
                  </a>
                  
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715; 
                  </a>
            </section>
            <h3>{props.name}</h3>
            <h4>{props.hometown}</h4>
            <h4>{props.surftype}</h4>
            <p><img src={"https://projectbackend-qwro.onrender.com/images/"+props.image} alt={props.name} /></p>
            <p>{props.bio}</p>
        </section>
            </div>
          ) : (
            ""
          )}
        </>
    );
};

export default SurfList;