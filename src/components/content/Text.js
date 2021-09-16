import React from 'react';

const Text = ({ text, title }) => {
  return (
    <div className="Text">
      <h2>{title}</h2>
      {text}
    </div>
  );
};

export default Text;
