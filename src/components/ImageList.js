import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  const imageList = images.map((image) => (
    <ImageCard image={image} key={image.id} />
  ));

  return <div className="image-list">{imageList}</div>;
};

export default ImageList;
