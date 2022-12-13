import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg, TwicView } from '@twicpics/components/react';
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

export const TwicBulkLoading = () => {
  const [current, setCurrent] = useState(2);
  const [last, setLast] = useState(1);
  const [penultimate, setPenultimate] = useState(0);

  const changeImage = () => {
    setCurrent((current + 1) % images.length);
    setLast((last + 1) % images.length);
    setPenultimate((penultimate + 1) % images.length);
  };

  return (
    <div id="twic-bulk-loading-container">
      <TwicWrapper gitHubUrl="src/lib/twicBulkLoading/index.jsx">
        <TwicAbstract title="Bulk loading">
          <p>
            With<Code>TwicImg</Code>and<Code>TwicVideo</Code>your medias will only start loading
            when they come into the viewport.
          </p>
          <p>
            But sometimes you may want to load multiple assets in bulk instead of lazy loading them.
          </p>
          <p>
            This is where<Code>TwicView</Code>comes into play.
          </p>
          <p>
            The<Code>TwicView</Code>components eager loads all of his<Code>TwicImg</Code>and&nbsp;
            <Code>TwicVideo</Code>children as soon as<Code>TwicView</Code>comes into the viewport
            (depending on your anticipation settings).
          </p>
          <p>
            See also the&nbsp;
            <a href="/eager" target="_blank" rel="noreferrer">
              eager property
            </a>
            &nbsp; that disables lazy loading for a given media.
          </p>
        </TwicAbstract>
        <TwicView>
          <div className="polaroids" onClick={changeImage}>
            <div className={`polaroid bottom ${current % 2 === 0 ? `left` : ``}`}>
              <TwicImg src={images[penultimate].url} />
            </div>
            <div className={`polaroid bottom previous ${(current - 1) % 2 === 0 ? `left` : ``}`}>
              <TwicImg src={images[last].url} />
            </div>
            {images.map((image, i) => (
              <div
                className={`polaroid ${i === current ? `top` : ``} ${i % 2 === 0 ? `left` : ``}`}
                key={i}
              >
                <TwicImg src={image.url} />
              </div>
            ))}
          </div>
        </TwicView>
      </TwicWrapper>
    </div>
  );
};
