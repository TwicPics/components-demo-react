/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const images = [
  `components/src-not-set/woman-1.jpg`,
  `components/src-not-set/boat.jpg`,
  `components/src-not-set/vase.jpg`,
  `components/src-not-set/street.jpg`,
  `components/src-not-set/sea.jpg`,
  `components/src-not-set/flowers.jpg`,
  `components/src-not-set/bird.jpg`,
  `components/src-not-set/feet.jpg`,
  `components/src-not-set/lemons.jpg`,
  `components/src-not-set/swimming-pool.jpg`,
  `components/src-not-set/man.jpg`,
  `components/src-not-set/kodak.jpg`
];

export const TwicPageTemplating = () => {
  const [srcIsSet, setSrcIsSet] = useState(false);
  return (
    <div id="twic-working-without-images-container">
      <TwicWrapper gitHubUrl="src/lib/twicPageTemplating/index.jsx">
        <TwicAbstract title="Prepare your page template">
          <p>
            When you develop the page template and can't or don't want to integrate your images at
            this first stage, it is possible
            <br /> not to assign a value to the<Code>src</Code>property.
          </p>
          <p>
            In this case, TwicPics components will generate a default red placeholder, which
            displays the dimensions of the image container.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={() => setSrcIsSet(!srcIsSet)}>
            Click to {srcIsSet ? `unset` : `set`} the src property
          </button>
        </div>
        <div className="twic-grid">
          {images.map((image, i) => (
            <div className="twic-item" key={i}>
              <TwicImg
                src={srcIsSet ? image : ``}
                placeholder="preview"
                ratio={i % 2 === 0 ? 1 : '4:3'}
              />
            </div>
          ))}
        </div>
      </TwicWrapper>
    </div>
  );
};
