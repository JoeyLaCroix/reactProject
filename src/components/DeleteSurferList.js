
import React, { useState } from "react";

const DeleteSurferList = (props) => {
  const [result, setResult] = useState("");

  const deleteSurferList = async() => {
   const response = await fetch(`https://projectbackend-qwro.onrender.com/api/surfers/${props._id}`,{
    method:"DELETE"
   });

   if(response.status === 200){
    setResult("Surfer Succesfully Deleted");
    props.hideSurferList();
    props.closeDialog();
   } else {
    setResult("Sorry, we couldn't delete your Surfer at this time.");
   }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>            
              <button onClick={deleteSurferList}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteSurferList;