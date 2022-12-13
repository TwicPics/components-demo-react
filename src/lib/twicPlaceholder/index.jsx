/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/cat.jpg`;
const PLACEHOLDERS_TEXT = `Click to reveal the placeholders`;
const IMG_TEXT = `Click to show the images`;

export const TwicPlaceholder = () => {
  const [showPlaceholders, setShowPlaceholders] = useState(false);
  const [toggleBtnText, setToggleBtnText] = useState(PLACEHOLDERS_TEXT);

  useEffect(() => {
    setToggleBtnText(showPlaceholders ? IMG_TEXT : PLACEHOLDERS_TEXT);
  });

  return (
    <div id="twic-placeholder-container">
      <TwicWrapper gitHubUrl="src/lib/twicPlaceholder/index.jsx">
        <TwicAbstract title="placeholder property">
          <p>
            <strong>
              The <dfn>placeholder</dfn> property helps you optimize user experience, CLS, and
              implement the LQIP technique.
            </strong>
          </p>
          <p>
            TwicPics Components automatically adds a background placeholder to your images: their
            size are reserved in the page before the images are actually loaded.
          </p>
          <p>
            The<Code>placeholder</Code>values can be:
            <Code>preview</Code>,<Code>meancolor</Code>,<Code>maincolor</Code>or
            <Code>none</Code>.
          </p>
          <p>
            The browser is told to load a SVG version as a background image first, then to replace
            it with the full version later on.
          </p>
          <p>
            When set to<Code>preview</Code>(the default value), a blurry version of your image is
            used as a background image.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={() => setShowPlaceholders(!showPlaceholders)}>
            {toggleBtnText}
          </button>
        </div>
        <div className={`twic-grid ${showPlaceholders ? `show-placeholders` : ``}`}>
          <div className="twic-item">
            <TwicImg src={imgUrl} placeholder="preview" />
            <span>
              <Code>placeholder="preview"</Code>
              (default value)
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} placeholder="meancolor" />
            <span>
              <Code>placeholder="meancolor"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} placeholder="maincolor" />
            <span>
              <Code>placeholder="maincolor"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} placeholder="none" />
            <span>
              <Code>placeholder="none"</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
