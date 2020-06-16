import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import { getPhotos } from '../api/unsplash';
/**
 * @param {React.FormEvent<HTMLFormElement>} e
 * @param {string} term
 * @param {(images: []) => void} setImages
 */
const onFormSubmit = async (e, term, setImages) => {
  e.preventDefault();

  try {
    const res = await getPhotos(term);
    setImages(res.data.results);
  } catch (e) {
    console.log(e);
  }
};

const App = () => {
  const [images, setImages] = useState([]);
  return (
    <div className="ui container" style={{ marginTop: 10 }}>
      <SearchBar onFormSubmit={(e, term) => onFormSubmit(e, term, setImages)} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
