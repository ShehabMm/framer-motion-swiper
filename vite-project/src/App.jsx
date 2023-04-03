import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [state, setstate] = useState([]);

  const fetchAxios = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setstate(response.data);
    console.log(state);
  };

  useEffect(() => {
    fetchAxios();
  }, []);

  return (
    <div className="body">
      {state.map((item) => {
        return (
          <div className="container">


            <img key={item.id} src={item.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default App;
