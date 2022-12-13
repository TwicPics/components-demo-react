import React, { useEffect, useState } from 'react';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const timerDuration = 3000;
export const Slideshow = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageReady, setImageReady] = useState(false);
  const [paused, setPaused] = useState(false);

  const onStateChange = (event) => {
    const { state } = event;
    setImageReady(state === `error` || state === `done`);
  };

  const updateIndex = (newIndex) => {
    let _newIndex = newIndex;
    if (newIndex < 0) {
      _newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      _newIndex = 0;
    }
    setActiveIndex(_newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused && imageReady) {
        updateIndex(activeIndex + 1);
      }
    }, timerDuration);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex, imageReady, paused]);

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <button
        className="slick-prev slick-arrow"
        onClick={() => updateIndex(activeIndex - 1)}
        disabled={!imageReady}
      >
        &#8249;
      </button>
      <div className="twic-item">
        <div className="inner-container">
          <div>
            <div
              className="inner"
              style={{
                // eslint-disable-next-line no-magic-numbers
                transform: `translateX(-${activeIndex * 100}%)`
              }}
            >
              {images.map((image, i) => (
                <div className="item" key={i}>
                  <TwicImg
                    className="responsive"
                    onStateChange={onStateChange}
                    src={image.url}
                    focus={image.focus}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ul className="slick-dots">
        {images.map((image, i) => (
          <li className={`${i === activeIndex ? `slick-active` : ``}`} key={i}>
            <button
              onClick={() => {
                updateIndex(i);
              }}
              disabled={!imageReady}
            ></button>
          </li>
        ))}
      </ul>
      <button
        className="slick-next slick-arrow"
        onClick={() => updateIndex(activeIndex + 1)}
        disabled={!imageReady}
      >
        &#8250;
      </button>
    </div>
  );
};
