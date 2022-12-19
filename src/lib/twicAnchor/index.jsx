/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const verticalConfig = [
  {
    anchor: undefined
  },
  {
    anchor: `top`
  },
  {
    anchor: `bottom`
  }
];

const horizontalConfig = [
  {
    anchor: undefined
  },
  {
    anchor: `left`
  },
  {
    anchor: `right`
  }
];

export const TwicAnchor = () => {
  const [indiceConfig, setIndiceConfig] = useState(0);
  let actualHorizontal = horizontalConfig[indiceConfig];
  let actualVertical = verticalConfig[indiceConfig];

  const changeIndiceConfig = () => {
    setIndiceConfig((indiceConfig + 1) % horizontalConfig.length);
  };

  useEffect(() => {
    actualHorizontal = horizontalConfig[indiceConfig];
    actualVertical = verticalConfig[indiceConfig];

    return () => {
      actualHorizontal = null;
      actualVertical = null;
    };
  });

  return (
    <div id="twic-anchor-container">
      <TwicWrapper gitHubUrl="src/lib/twicAnchor/index.jsx">
        <TwicAbstract title="anchor property">
          <p>
            <strong>
              The <dfn>anchor</dfn> property positions the image in both
              <Code>contain</Code>
              and<Code>cover</Code>mode.
            </strong>
          </p>
          It allows to:
          <ul>
            <li>
              position the letterboxed image in its container in<Code>contain</Code>mode.
            </li>
            <li>
              determine what should be visible when the image is cropped in&nbsp;
              <span className="twic-code">cover</span> mode.
            </li>
          </ul>
          <p>
            Accepted values are<Code>top</Code>,<Code>bottom</Code>,<Code>left</Code>
            ,&nbsp;
            <Code>right</Code>,<Code>top-left</Code>,<Code>top-right</Code>,<Code>bottom-left</Code>
            and&nbsp;
            <Code>bottom-right</Code>.
          </p>
          <p>
            Please note that anchor is applied after an eventual transformation defined with&nbsp;
            <a href="/preTransform" target="_blank" rel="noreferrer">
              preTransform
            </a>
            &nbsp;property.
          </p>
          <p>
            For a more specific positionning see&nbsp;
            <a href="/position" target="_blank" rel="noreferrer">
              position
            </a>
            &nbsp;or&nbsp;
            <a href="/focus" target="_blank" rel="noreferrer">
              focus
            </a>
            &nbsp;properties in for
            <Code>contain</Code>or
            <Code>cover</Code>mode respectively.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={changeIndiceConfig}>
            Click to see anchor effect
          </button>
        </div>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg
              src="components/anchor/anchor.jpg"
              preTransform="focus=bottom-right/cover=1:1"
              anchor={actualHorizontal.anchor}
              mode="contain"
              ratio="4/3"
            />
            <span>
              <span>
                <Code>anchor="{actualHorizontal.anchor}"</Code>
                <Code>mode="contain"</Code>
              </span>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src="components/anchor/anchor.jpg"
              preTransform="focus=bottom-right/cover=1:1"
              anchor={actualVertical.anchor}
              mode="contain"
              ratio="3/4"
            />
            <span>
              <span>
                <span>
                  <Code>anchor="{actualVertical.anchor}"</Code>
                  <Code>mode="contain"</Code>
                </span>
              </span>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src="components/anchor/anchor.jpg"
              preTransform="focus=bottom/cover=1:1"
              anchor={actualHorizontal.anchor}
              mode="cover"
              ratio="3/4"
            />
            <span>
              <span>
                <Code>anchor="{actualHorizontal.anchor}"</Code>
                <Code>mode="cover"</Code>
              </span>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src="components/anchor/anchor.jpg"
              preTransform="cover=1:1"
              anchor={actualVertical.anchor}
              mode="cover"
              ratio="4/3"
            />
            <span>
              <span>
                <span>
                  <Code>anchor="{actualVertical.anchor}"</Code>
                  <Code>mode="cover"</Code>
                </span>
              </span>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
