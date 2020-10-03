import React from "react";
import GalleryItems from "./GalleryItems";

const Gallery = ({ images }) => {
  return (
    <div className="row row-images">
      <div className="col-md-4 imageItems1">
        <GalleryItems sponsored images={images[0]} />
        <GalleryItems sponsored three images={images[1]} />
        <GalleryItems play images={images[2]} />
        <GalleryItems images={images[3]} />
        <GalleryItems three images={images[4]} />
        <GalleryItems download images={images[5]} />
      </div>
      <div className="col-md-4 imageItems2">
        <GalleryItems three images={images[6]} />
        <GalleryItems add images={images[7]} />
        <GalleryItems images={images[8]} />

        <GalleryItems add download images={images[9]} />
        <GalleryItems add goku images={images[10]} />
        <GalleryItems images={images[11]} />
        <GalleryItems images={images[12]} />
      </div>
      <div className="col-md-4 imageItems3">
        <GalleryItems images={images[15]} featured />
        <GalleryItems add download play goku images={images[13]} />
        <GalleryItems images={images[14]} />
        <GalleryItems add images={images[16]} />
        <GalleryItems add images={images[17]} />
        <GalleryItems add images={images[18]} />
      </div>
    </div>
  );
};

export default Gallery;
