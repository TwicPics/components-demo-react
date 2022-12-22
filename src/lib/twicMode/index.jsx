/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/fox.jpg`;
const modeValues = [`cover`, `contain`];

export const TwicMode = () => {
  const [modeIndex, setModeIndex] = useState(0);

  const changeMode = () => {
    setModeIndex((modeIndex + 1) % modeValues.length);
  };
  return (
    <div id="twic-mode-container">
      <TwicWrapper filename="src/lib/twicMode/index.jsx">
        <TwicAbstract title="mode property">
          <p>
            <strong>
              The
              <dfn>mode</dfn>&nbsp; property determines if the image fills or sits inside the area.
            </strong>
          </p>
          <p>Here are the two accepted values:</p>
          <ul>
            <li>
              <Code>cover</Code>:<span> the image fills the area and is cropped accordingly.</span>
            </li>
            <li>
              <Code>contain</Code>:<span> the image sits inside the area with no cropping.</span>
            </li>
          </ul>
        </TwicAbstract>
        <div className="twic-grid">
          <div className="twic-item">
            <button className="twic-button" onClick={changeMode}>
              Click to change the mode value
            </button>
            <TwicImg
              src={`${imgUrl}?${modeIndex}`} // tip to force image reload.
              mode={modeValues[modeIndex]}
            />
            <span>
              <Code>mode="{modeValues[modeIndex]}"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} />
            <span>
              No mode set (<Code>cover</Code>by default)
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} mode="cover" />
            <span>
              <Code>mode="cover"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} mode="contain" />
            <span>
              <Code>mode="contain"</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
