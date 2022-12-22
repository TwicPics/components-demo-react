import React from 'react';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const images = [
  {
    url: `components/slider/pantone.jpg`
  },
  {
    url: `components/slider/coffee.jpg`
  },
  {
    url: `components/slider/reading.jpg`
  },
  {
    url: `components/slider/cat-2.jpg`
  },
  {
    url: `components/slider/mirror.jpg`
  },
  {
    url: `components/slider/books.jpg`
  },
  {
    url: `components/slider/sea.jpg`
  },
  {
    url: `components/slider/frames.jpg`
  },
  {
    url: `components/slider/dried-flower.jpg`
  },
  {
    url: `components/slider/dune.jpg`
  },
  {
    url: `components/slider/coffee-2.jpg`
  },
  {
    url: `components/slider/yak.jpg`
  },
  {
    url: `components/slider/dried-flower-2.jpg`
  },
  {
    url: `components/slider/guitar.jpg`
  },
  {
    url: `components/slider/field.jpg`
  },
  {
    url: `components/slider/woman-and-sand.jpg`
  }
];

export const TwicSlider = () => {
  return (
    <div id="twic-slider-container">
      <TwicWrapper filename="src/lib/twicSlider/index.jsx">
        <TwicAbstract title="A slider">
          <p>
            A simple slider that uses TwicPics for automatic lazy-loading, CLS optimization and art
            directions adaptation.
          </p>
          <p>
            <strong>Change the width of your browser</strong> to see the image aspect-ratio adapt
            according to the CSS rules.
          </p>
        </TwicAbstract>

        <ul className="slider">
          {images.map((image, i) => (
            <li className="slider-item" key={i}>
              <figure className="card twic-item">
                <TwicImg src={image.url} />
              </figure>
            </li>
          ))}
        </ul>
      </TwicWrapper>
    </div>
  );
};
