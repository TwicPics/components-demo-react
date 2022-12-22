import React, { useEffect, useState } from 'react';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const images = [
  {
    src: `components/eager/subway-1.jpg`,
    preTransform: 'flip=x'
  },
  {
    src: `components/eager/subway-2.jpg`,
    focus: `50px30p`
  },
  {
    src: `components/eager/subway-3.jpg`
  },
  {
    src: `components/eager/subway-4.jpg`
  },
  {
    src: `components/eager/subway-5.jpg`
  },
  {
    src: `components/eager/subway-6.jpg`
  }
];

export const TwicEager = () => {
  const [indice, setIndice] = useState(0);
  const [paused, setPaused] = useState(true);

  const startAnimation = () => {
    setIndice(1);
    setPaused(false);
  };

  useEffect(() => {
    setTimeout(() => {
      if (paused) {
        setIndice(0);
      } else {
        setIndice((indice + 1) % images.length);
        setPaused(indice === images.length - 1);
      }
    }, 1000);
  }, [indice, paused]);

  return (
    <div id="twic-eager-container">
      <TwicWrapper filename="src/lib/twicEager/index.jsx">
        <div className="demo-container">
          <TwicAbstract title="eager property">
            <p>
              <strong>
                The <dfn>eager</dfn> property allows to disable lazy loading for a given media
              </strong>
              : associated specific media will start loading regardless of whether it is visible in
              the view port.
            </p>
            <p>
              Useful to ensure that media is loaded before entering the viewport but not recommended
              as a general practice.
            </p>
            <p>
              See also the&nbsp;
              <a href="/bulk-loading" target="_blank" rel="noreferrer">
                TwicView Component
              </a>
              &nbsp; which allows to load all the TwicImg and TwicVideo elements it contains in one
              block, but once TwicView arrives near the Viewport.
            </p>
          </TwicAbstract>
          {indice === 0 && (
            <div className="twic-testing-container">
              <button className="twic-button" onClick={startAnimation}>
                Click to start animation
              </button>
            </div>
          )}
          <div className="banner-container">
            <div
              className="banner"
              style={{
                // eslint-disable-next-line no-magic-numbers
                transform: `translateX(-${indice * 100}%)`
              }}
            >
              {images.map((image, i) => (
                <div className="item" key={i}>
                  <TwicImg
                    src={image.src}
                    focus={image.focus}
                    eager
                    ratio="none"
                    preTransform={image.preTransform}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
