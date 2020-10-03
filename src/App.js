import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Categories from "./components/Categories";
import NavbarMain from "./components/Navbar";

import "./sass/_main.scss";

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        "https://pixabay.com/api/?key=18556583-77323f803cfbbceb49a1ffd80&q=black+cars&image_type=photo"
      )
        .then((response) => response.json())
        .then((data) => {
          setImages(data.hits);
          setBackgroundImage(data.hits[3].largeImageURL);
        });
    };

    fetchData();
  }, []);
  return (
    <div className="app">
      {console.log(images)}
      <NavbarMain />
      <Background background={backgroundImage} />
      <Categories images={images} />
    </div>
  );
};

export default App;
