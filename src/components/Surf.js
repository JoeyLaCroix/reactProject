import { useState, useEffect } from "react";
import axios from "axios";
import SurfList from "./SurfList";


const Surf = () => {
  const [surfers, setSurfers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:3001/api/surfers");
      setSurfers(response.data);
    })();
  }, []);

  return (
    <div className="surfers-list">
      <div className="columns">
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