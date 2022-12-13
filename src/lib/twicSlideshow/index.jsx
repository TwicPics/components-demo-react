import React from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { Slideshow } from './slideShow';
import './index.scss';

const images = [
  {
    url: `components/slideshow/space-1.jpg`,
    focus: ``
  },
  {
    url: `components/slideshow/space-2.jpg`,
    focus: `50px100p`
  },
  {
    url: `components/slideshow/space-3.jpg`,
    focus: `50px100p`
  },
  {
    url: `components/slideshow/space-4.jpg`,
    focus: `50px100p`
  },
  {
    url: `components/slideshow/space-5.jpg`,
    focus: `50px100p`
  }
];

export const TwicSlideshow = () => {
  return (
    <div id="twic-slideshow-container">
      <TwicWrapper gitHubUrl="src/lib/twicSlideshow/index.jsx">
        <TwicAbstract title="A Picture Carousel">
          <p>
            Use TwicPics for automatic lazy-loading, CLS optimization and art directions adaptation.
          </p>
          <p>
            Monitor the&nbsp;
            <a href="/state" target="_blank" rel="noreferrer">
              loading status&nbsp;
            </a>
            &nbsp; of your media with<Code>onStateChange</Code>callback property.
          </p>
          <p>
            <strong>Change the width of your browser</strong> to see the image aspect-ratio adapt
            according to the CSS rules.
          </p>
        </TwicAbstract>
        <div className="slideshow-container">
          <Slideshow images={images} />
        </div>
      </TwicWrapper>
    </div>
  );
};
