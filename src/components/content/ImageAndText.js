import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

import { motion, useAnimation } from 'framer-motion';

function ImageAndText({ img, text, title, config }) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 100,
        transition: { duration: 4 },
      });
    }
  }, [inView]);

  if (config) {
    return (
      <motion.div
        className="ImageAndText"
        animate={controls}
        initial={{ opacity: 0 }}
        ref={ref}
      >
        <img src={img} alt="hello" />
        <div className="legende">
          <h2>{title}</h2>
          {text}
        </div>
      </motion.div>
    );
  } else {
    return (
      <motion.div
        className="ImageAndText"
        animate={controls}
        initial={{ opacity: 0 }}
        ref={ref}
      >
        <div className="legende">
          <h2>{title}</h2>
          {text}
        </div>
        <img src={img} alt="hello" />
      </motion.div>
    );
  }
}

ImageAndText.propTypes = {
  config: PropTypes.bool.isRequired,
};

export default ImageAndText;
