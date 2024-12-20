import "../css/addDialog.css";
import React, { useState } from "react";

const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
      };

      const onSubmit = async(event) =>{
        event.preventDefault();
        setResult("Welcome to the Team🤙");
        const formData = new FormData(event.target);

    const response = await fetch("https://projectbackend-qwro.onrender.com/api/surfers", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
        setResult("Surfer added🤙");
        event.target.reset();
        props.addSurfer(await response.json());
        props.closeDialog();
      } else {
        console.log("Error adding Surfer", response);
        setResult(response.message);
      }
    };

    return(
            <div id="add-dialog" className="w3-modal">
              <div className="w3-modal-content">
                <div className="w3-container">
                  <span
                    id="dialog-close"
                    className="w3-button w3-display-topright"
                    onClick={props.closeDialog}
                  >
                    &times;
                  </span>
                  <form id="add-property-form" onSubmit={onSubmit}>
                    <p>
                     <label htmlFor = "name">Name:</label>
                     <input type="text" id="name" name="name"  value={inputs.name || ""} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor = "hometown">Hometown:</label>
                    <input type="text" id="hometown" name="hometown" value={inputs.hometown || ""} onChange={handleChange} required />
                    </p>
                    <p>
                    <label htmlFor = "Surftype">Surftype:</label>
                    <input type="text" id="surftype" name="surftype" value={inputs.surftype || ""} onChange={handleChange} required />
                    </p>
                    <section className="columns">
                    <p id="img-prev-section">
                        <img
                        id="img-prev"
                        src={
                            inputs.img != null ? URL.createObjectURL(inputs.img) : ""
                        }
                        alt=""
                        />
                    </p>
                    <p id="img-upload">
                        <label htmlFor="img">Upload Image:</label>
                        <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept="image/*"
                        />
                    </p>
                    </section>
                    <p>
                        <label htmlFor = "bio">Bio:</label>
                        <input type="text" id="bio" name="bio" value={inputs.bio || ""} onChange={handleChange} required/>
                    </p>
                    <p>
                        <button type="submit">Submit</button>
                    </p>
                  </form>
                  <p>{result}</p>
                </div>
              </div>
            </div>    
    );
}

export default AddDialog;