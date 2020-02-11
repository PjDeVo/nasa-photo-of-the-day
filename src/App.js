import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/App.css";
import Banner from "./components/Banner";
import Photo from "./components/Photo";
import Buttons from "./components/Buttons";

function App() {
  const [photoData, setPhotoData] = useState(
    "https://spacenews.com/wp-content/uploads/2019/07/Artemis-Lander-concept-art.jpg"
  );

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log("here is the data", response);
        setPhotoData(response.data.url);
      })
      .catch(error => {
        console.log(error);
      });
  }, [photoData]);

  return (
    <div className="app-container">
      <Banner />;
      <Photo img={photoData} />
      <Buttons />
    </div>
  );
}

export default App;
