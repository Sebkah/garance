import React from 'react';
import PropTypes from 'prop-types';

function ImageAndText({ img, text, title, config }) {
  if (config) {
    return (
      <div className="ImageAndText">
        <img src={img} alt="hello" />
        <div className="legende">
          <h2>{title}</h2>
          {text}
        </div>
      </div>
    );
  } else {
    return (
      <div className="ImageAndText">
        <div className="legende">
          <h2>{title}</h2>
          {text}
        </div>
        <img src={img} alt="hello" />
      </div>
    );
  }
}

ImageAndText.propTypes = {
  config: PropTypes.bool.isRequired,
};

export default ImageAndText;
