/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/woman-and-winter.jpg`;
const ratioValues = [`2.39`, `16/9`, `4/3`, ``, `0.75`];

export const TwicRatio = () => {
  const [ratioIndex, setRatioIndex] = useState(0);
  const [fullWidthAera, setFullWidthAera] = useState(true);
  return (
    <div id="twic-ratio-container">
      <TwicWrapper gitHubUrl="src/lib/twicRatio/index.jsx">
        <TwicAbstract title="ratio property">
          <p>
            <strong>
              The <dfn>ratio</dfn> property determines the value of the width/height ratio of the
              image display area.
            </strong>
          </p>
          <p>Its value can be:</p>
          <ul>
            <li>
              a ratio expression of the form <b>width/height</b> or <b>width:height</b> like
              <Code>4/3</Code>,<Code>4:3</Code>,<Code>800/600</Code>...
            </li>
            <li>
              a number that is the result of such an expression like
              <Code>1.85</Code>,<Code>2</Code>, or
              <Code>0.5</Code>.
            </li>
            <li>
              "none" as in<Code>ratio="none"</Code>. In this case the media displayed has a "free"
              ratio defined by the dimensions of its container. Particularly useful in the case
              of&nbsp;
              <a href="/hero" target="_blank" rel="noreferrer">
                image or video hero
              </a>
              .
            </li>
          </ul>
          <p>
            A square area (<Code>ratio="1"</Code>) will be created by default.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button
            className="twic-button"
            onClick={() => setRatioIndex((ratioIndex + 1) % ratioValues.length)}
          >
            Click to change the aspect-ratio
          </button>
          <button className="twic-button" onClick={() => setFullWidthAera(!fullWidthAera)}>
            Click to change the area width
          </button>
        </div>
        <div className={`twic-grid ${fullWidthAera && `half-width`}`}>
          <div className="twic-item">
            <TwicImg src={imgUrl} ratio={ratioValues[ratioIndex]} />
            <span>
              <span className="twic-code">
                ratio="{ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1}"
              </span>
              &nbsp;(mode is<Code>cover</Code>)
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} mode="contain" ratio={ratioValues[ratioIndex]} />
            <span>
              <span className="twic-code">
                ratio="{ratioValues[ratioIndex] ? ratioValues[ratioIndex] : 1}"
              </span>
              &nbsp;(mode is<Code>contain</Code>)
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
