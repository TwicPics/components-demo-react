/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const landscapeImgUrl = `components/position/horse.jpg`;
const portraitImgUrl = `components/position/forest.jpg`;
const horizontalPositionArray = [`left`, `right`, `center`];
const verticalPositionArray = [`top`, `bottom`, `center`];

export const TwicPosition = () => {
  const [horizontalPositionIndex, setHorizontalPositionIndex] = useState(0);
  const [verticalPositionIndex, setVerticalPositionIndex] = useState(0);

  const changePosition = () => {
    setHorizontalPositionIndex((horizontalPositionIndex + 1) % horizontalPositionArray.length);
    setVerticalPositionIndex((verticalPositionIndex + 1) % verticalPositionArray.length);
  };
  return (
    <div id="twic-position-container">
      <TwicWrapper filename="src/lib/twicPosition/index.jsx">
        <TwicAbstract title="position property">
          <p>
            In<Code>contain</Code>mode,
            <strong>
              the <dfn>position</dfn> property changes the location of the image inside the area of
              the component.
            </strong>
          </p>
          <p>
            The syntax is the same as for CSS position properties (e.g.
            <Code>background-position</Code>or
            <Code>object-position</Code>).
          </p>
          <p>
            Useful values are<Code>top</Code>,<Code>bottom</Code>,<Code>left</Code>, and
            <Code>right</Code>, but all valid CSS position values are valid.
          </p>
          <p>
            If you only need border-based positionning, you can also use&nbsp;
            <a href="/anchor" target="_blank" rel="noreferrer">
              anchor
            </a>
            &nbsp; property.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={changePosition}>
            Click to change the position
          </button>
        </div>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg
              src={landscapeImgUrl}
              mode="contain"
              placeholder="none"
              position={verticalPositionArray[verticalPositionIndex]}
            />
            <span>
              <Code>position="{verticalPositionArray[verticalPositionIndex]}"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src={portraitImgUrl}
              mode="contain"
              placeholder="none"
              position={horizontalPositionArray[horizontalPositionIndex]}
            />
            <span>
              <span className="twic-code">
                position="{horizontalPositionArray[horizontalPositionIndex]}"
              </span>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={landscapeImgUrl} mode="contain" placeholder="none" />
            <span>
              No position set (<Code>center</Code>by default)
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={portraitImgUrl} mode="contain" placeholder="none" />
            <span>
              No position set (<Code>center</Code>by default)
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
