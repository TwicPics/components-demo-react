/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/puppy.jpg`;
const focusArray = [null, `1920x1282`, `auto`];

export const TwicFocus = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  const changeFocus = () => {
    setFocusIndex((focusIndex + 1) % focusArray.length);
  };

  return (
    <div id="twic-focus-container">
      <TwicWrapper gitHubUrl="src/lib/twicFocus/index.jsx">
        <TwicAbstract title="focus property">
          <p>
            <strong>
              The <dfn>focus</dfn> property will change the focus point coordinates of the image
            </strong>
            (only useful with
            <Code>mode="cover"</Code>).
            <br />
            It allows to determine what should be visible when the image is cropped.
          </p>
          <p>
            You can set the focus by using coordinates or
            <Code>auto</Code> values:
          </p>
          <ul>
            <li>
              <strong>Coordinates</strong> represent a point in the image, specified as a couple of
              positive lengths, separated by the character <Code>x</Code>.
              <br />
              As an example, in
              <Code>focus="1920x1282"</Code>:<br />- <Code>1920</Code> is the coordinate along the
              x-axis (following the width of the image)
              <br />- and <Code>1282</Code> is the coordinate along the y-axis (following the height
              of the image)
            </li>
            <li>
              If <Code>auto</Code> is used in place of actual coordinates, the focus point will be
              chosen automagically for you!
            </li>
          </ul>
          <p>
            If you only need border-based positionning (<Code>top</Code>, <Code>bottom</Code>, etc),
            use&nbsp;
            <a href="/anchor" target="_blank" rel="noreferrer">
              anchor
            </a>
            &nbsp;instead.
          </p>
        </TwicAbstract>

        <div className="twic-grid">
          <div className="twic-item">
            <button className="twic-button" onClick={changeFocus}>
              Click to change the focus point
            </button>
            <TwicImg
              src={imgUrl}
              focus={focusArray[focusIndex]}
              ratio="4/5"
              placeholder="preview"
            />
            {focusArray[focusIndex] ? (
              <span>
                <span className="twic-code">focus="{focusArray[focusIndex]}"</span>
              </span>
            ) : (
              <span>
                <span>No focus</span> (default)
              </span>
            )}
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} ratio="4/5" placeholder="preview" />
            <span>
              <span>No focus</span>
              (default)
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} ratio="4/5" focus="1920x1282" placeholder="preview" />
            <span>
              <Code>focus="1920x1282"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} ratio="4/5" focus="auto" placeholder="preview" />
            <span>
              <Code>focus="auto"</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
