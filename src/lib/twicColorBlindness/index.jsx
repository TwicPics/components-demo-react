/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/color-blindless/umbrellas.jpg`;

const config = [
  {
    achromatopsia: 'achromatopsia=0.5',
    deuteranopia: 'deuteranopia=0.5',
    protanopia: 'protanopia=0.5'
  },
  {
    achromatopsia: 'achromatopsia=1',
    deuteranopia: 'deuteranopia=1',
    protanopia: 'protanopia=1'
  },
  {
    achromatopsia: 'achromatopsia=0',
    deuteranopia: 'deuteranopia=0',
    protanopia: 'protanopia=0'
  }
];

export const TwicColorBlindness = () => {
  const [indiceConfig, setIndiceConfig] = useState(0);
  let actualConfig = config[indiceConfig];

  const changeIndiceConfig = () => {
    setIndiceConfig((indiceConfig + 1) % config.length);
  };

  useEffect(() => {
    actualConfig = config[indiceConfig];

    return () => {
      actualConfig = null;
    };
  });
  return (
    <div id="twic-color-blindness-container">
      <TwicWrapper gitHubUrl="src/lib/twicColorBlindness/index.jsx">
        <TwicAbstract title="Color blindness filters">
          <p>
            You can apply correction filters for color blind people with our&nbsp;
            <strong>experimental transformations</strong>:
          </p>
          <ul>
            <li>
              <a
                href="https://www.twicpics.com/docs/reference/transformations#span-classexperimentalachromatopsiaspan?utm_source=github&utm_medium=organic&utm_campaign=components"
                target="_blank"
                rel="noreferrer"
              >
                <Code>preTransform="achromatopsia=number"</Code>
              </a>
            </li>
            <li>
              <a
                href="https://www.twicpics.com/docs/reference/transformations#span-classexperimentaldeuteranopiaspan?utm_source=github&utm_medium=organic&utm_campaign=components"
                target="_blank"
                rel="noreferrer"
              >
                <Code>preTransform="deuteranopia=number"</Code>
              </a>
            </li>
            <li>
              <a
                href="https://www.twicpics.com/docs/reference/transformations#span-classexperimentalprotanopiaspan?utm_source=github&utm_medium=organic&utm_campaign=components"
                target="_blank"
                rel="noreferrer"
              >
                <Code>preTransform="protanopia=number"</Code>
              </a>
            </li>
          </ul>
          <p>
            The number provided must be between 0 and 1 and represents the degree of colour
            blindness to be corrected.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={changeIndiceConfig}>
            Click to change color blindness correction degree
          </button>
        </div>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg src={imgUrl} />
            <span> Original image </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} preTransform={actualConfig.achromatopsia} />
            <span> preTransform="{actualConfig.achromatopsia}" </span>
          </div>

          <div className="twic-item">
            <TwicImg src={imgUrl} preTransform={actualConfig.deuteranopia} />
            <span> preTransform="{actualConfig.deuteranopia}" </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} preTransform={actualConfig.protanopia} />
            <span> preTransform="{actualConfig.protanopia}" </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
