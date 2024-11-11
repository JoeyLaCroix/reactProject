import { useState, useEffect } from "react";
import axios from "axios";
import SurfList from "./SurfList";


const Surf = () => {
  const [surfers, setSurfers] = useState([]);

  //wait until after page is rendered to do the asyncronous loading
  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/surfers");
      setSurfers(response.data);
    })();
  }, []);

  return (
    <div className="surfers-list">
      <h3>Our Surfers</h3>
      <div className="columns">
        {surfers.map((surfList) => (
          <SurfList
            name={surfList.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Surf;