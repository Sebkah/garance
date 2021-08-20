import React from 'react';

function ImageAndText({ img, text, title }) {
  return (
    <div className="ImageAndText">
      <img src={img} alt="hello" />
      <div className="legende">
        <h2>{title}</h2>
        {text}
      </div>
    </div>
  );
}

export default ImageAndText;
