import React, { useRef, useState } from 'react';

/**
 * @param {number} clientHeight
 * @param {(number) => void} setSpans
 */

const setSpanNumber = (clientHeight, setSpans) => {
  const numberOfSpans = Math.ceil(clientHeight / 10);
  setSpans(numberOfSpans);
};

const ImageCard = ({ image }) => {
  const imageRef = useRef();
  const [spans, setSpans] = useState(0);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img
        src={image.urls.regular}
        alt={image.description}
        ref={imageRef}
        onLoad={(e) => setSpanNumber(imageRef.current.clientHeight, setSpans)}
      />
    </div>
  );
};

export default ImageCard;
