import React from "react";
import threeS from "../assets/360.png";
import down from "../assets/download.png";
import addd from "../assets/add.png";
import plays from "../assets/play.png";
import head from "../assets/head.png";

const GalleryItems = ({
  images,
  three,
  add,
  play,
  download,
  featured,
  sponsored,
}) => {
  return (
    <div className="imageItems">
      {featured ? (
        <div className="featured">
          <h5>Featured Artists</h5>
          <div className="feat-container">
            <img src={head} alt="" />
            <div className="name">
              Artist name
              <p className="views">No of Views</p>
            </div>
          </div>

          <div className="feat-container mt-2">
            <img src={head} alt="" />
            <div className="name">
              Artist name
              <p className="views">No of Views</p>
            </div>
          </div>

          <div className="feat-container mt-2">
            <img src={head} alt="" />
            <div className="name">
              Artist name
              <p className="views">No of Views</p>
            </div>
          </div>

          <div className="feat-container mt-2">
            <img src={head} alt="" />
            <div className="name">
              Artist name
              <p className="views">No of Views</p>
            </div>
          </div>

          <div className="feat-container mt-2">
            <img src={head} alt="" />
            <div className="name">
              Artist name
              <p className="views">No of Views</p>
            </div>
          </div>
        </div>
      ) : null}
      {images ? (
        <img className="imageItemColumn" src={images.largeImageURL} alt="" />
      ) : null}
      {three ? <img className="three" src={threeS} alt="" /> : null}

      {add ? <img className="add" src={addd} alt="" /> : null}

      {download ? <img className="download" src={down} alt="" /> : null}

      {play ? <img className="plays" src={plays} alt="" /> : null}

      {sponsored ? <p className="sponsored">Sponsored</p> : null}
    </div>
  );
};

export default GalleryItems;
