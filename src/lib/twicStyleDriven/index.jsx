import React from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/horse.jpg`;
export const TwicStyleDriven = () => {
  return (
    <div id="twic-style-driven-container">
      <TwicWrapper filename="src/lib/twicStyleDriven/index.jsx">
        <TwicAbstract title="CSS style driven">
          <p>
            You can set up the TwicPics components using pure CSS and the power of CSS variables.
          </p>
        </TwicAbstract>
        <p>
          <b>1.</b> Set up aspect ratio with<Code>--twic-ratio</Code>css variable.
        </p>
        <div className="twic-grid">
          <div className="twic-item square">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>square</Code>
            </span>
          </div>
          <div className="twic-item portrait">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>portrait</Code>
            </span>
          </div>
          <div className="twic-item landscape">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>landscape</Code>
            </span>
          </div>
        </div>
        <p>
          <b>2.</b> Set up{' '}
          <a href="/zoom" target="_blank" rel="noreferrer">
            zoom
          </a>{' '}
          value with <Code>--twic-zoom</Code> css variable.
        </p>
        <div className="twic-grid">
          <div className="twic-item zoom-sm">
            <TwicImg src={imgUrl} zoom="css" />
            <span>
              class
              <Code>zoom-sm</Code>
            </span>
          </div>
          <div className="twic-item zoom-md">
            <TwicImg src={imgUrl} zoom="css" />
            <span>
              class
              <Code>zoom-md</Code>
            </span>
          </div>
          <div className="twic-item zoom-lg">
            <TwicImg src={imgUrl} zoom="css" />
            <span>
              class
              <Code>zoom-lg</Code>
            </span>
          </div>
        </div>
        <p>
          <b>3.</b> Class combination: you can set up multiples props as<Code>object-fit</Code>and
          <Code>position</Code>with
          <Code>--twic-mode</Code>and
          <Code>twic-position</Code>
        </p>
        <br></br>
        <div className="twic-grid">
          <div className="twic-item contain left">
            <TwicImg src={imgUrl} ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>left</Code>
            </span>
          </div>
          <div className="twic-item contain right">
            <TwicImg src={imgUrl} ratio="16/9" />
            <span>
              class
              <Code>contain</Code>& class
              <Code>right</Code>
            </span>
          </div>
          <div className="twic-item cover">
            <TwicImg src={imgUrl} focus="50px100p" ratio="16/9" />
            <span>
              class
              <Code>cover</Code>
            </span>
          </div>
        </div>
        <p>
          <b>4.</b> Other classical settings (here with
          <Code>width</Code>)
        </p>
        <br></br>
        <div className="twic-grid">
          <div className="twic-item lg">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>lg</Code>
            </span>
          </div>
          <div className="twic-item md">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>md</Code>
            </span>
          </div>
          <div className="twic-item sm">
            <TwicImg src={imgUrl} />
            <span>
              class
              <Code>sm</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
