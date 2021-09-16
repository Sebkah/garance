import React from 'react';
import forum from '../img/fresnes/forum.jpg';
import ImageAndText from './ImageAndText';

function page() {
  function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  const images = importAll(
    require.context('../img/fresnes', false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <div className="Page">
      <div className="hero">
        <div className="pageImage"></div>

        <h1 className="pageTitle">
          Mairie de <br />
          Fresnes
        </h1>

        <div className="pageText">
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
        </div>
      </div>

      <div className="content">
        {/* <img src="./img/fresnes/forum.jpg" alt="hello" /> */}

        {
          <img
            src={process.env.REACT_APP_PUBLIC_URL + 'img/forum.jpg'}
            alt=""
          />
        }

        {/*  <ImageAndText
          title="fête de l'été"
          img={images['fetedelété.jpg'].default}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        /> */}

        {/* <ImageAndText
          title="fête de l'été"
          img={images['fetedelété.jpg'].default}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et
          sem pharetra, varius orci eu, mattis massa. Donec non purus dictum,
          elementum tortor non, consectetur velit. Mauris eu ultrices nibh.
          Integer malesuada elementum gravida. "
        /> */}
      </div>
    </div>
  );
}

export default page;
