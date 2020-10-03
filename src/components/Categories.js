import React from "react";
import BottomNav from "./BottomNav";
import Gallery from "./Gallery";

const Categories = ({ images }) => {
  return (
    <div className="categories">
      <div className="container">
        <h3 className="cat-title">Top Categories</h3>

        <div className="slider">
          {images && images.length > 1
            ? images.slice(0, 5).map((image) => {
                return (
                  <div className="image-list" key={image.id}>
                    <img src={image.largeImageURL} alt="" />
                  </div>
                );
              })
            : null}
          <div className="button-container">
            <button className="slider-button"></button>
          </div>
        </div>

        <BottomNav />
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default Categories;
