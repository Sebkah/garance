import React from 'react';
import ImageAndText from '../content/ImageAndText';
import Image from '../content/Image';
import Text from '../content/Text';
import { motion } from 'framer-motion';

function page({ color }) {
  console.log(color);
  var folder;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    folder = '';
  } else {
    folder = '/react/build';
  }
  return (
    <div className="Page" style={{ '--pageColor': color }}>
      <div className="hero">
        <div className="pageImage"></div>

        <motion.h1
          className="pageTitle"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ y: -500 }}
          transition={{ /* type: 'spring', stiffness: 90, */ duration: 0.4 }}
        >
          Mairie de <br />
          Fresnes
        </motion.h1>

        <motion.div
          className="pageText"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ y: -500 }}
          transition={{
            duration: 0.5,
          }}
        >
          <h2>proposition pour fresnes</h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. Suspendisse non felis et tortor
          maximus semper ultricies a lorem. Nam ligula mi, sollicitudin ac
          dapibus et, rutrum vitae eros. Duis eget odio finibus, faucibus massa
          quis, consequat diam. Morbi condimentum dictum pulvinar. Donec
          vulputate, justo sit amet suscipit aliquam, erat erat facilisis enim,
          vel fringilla elit augue ut eros.
        </motion.div>
      </div>

      <div className="content">
        <ImageAndText
          config={true}
          title="fête de l'été"
          img={folder + '/img/forum.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        />
        <ImageAndText
          config={false}
          title="nop"
          img={folder + '/img/fresnes/fetedelete.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        />
      </div>
      <div className="content">
        <ImageAndText
          config={true}
          title="fête de l'été"
          img={folder + '/img/forum.jpg'}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        />
      </div>
      <div className="content">
        <Image img={folder + '/img/forum.jpg'} />
        <Text
          title="fête de l'été"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        />
        <Image img={folder + '/img/fresnes/frise.jpg'} />
      </div>
    </div>
  );
}

export default page;
