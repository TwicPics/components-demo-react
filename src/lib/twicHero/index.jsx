/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

export const TwicHero = () => {
  return (
    <div id="twic-hero-container">
      <TwicWrapper gitHubUrl="src/lib/twicHero/index.jsx">
        <div className="twic-demo-container">
          <TwicAbstract title="Hero image">
            <p>To display a hero image (or video) you need to :</p>
            <ul>
              <li>define the dimensions of TwicImg (or TwicVideo) especially it's height.</li>
              <li>
                use <Code>ratio="none"</Code> to free
                <a href="/ratio" target="_blank" rel="noreferrer">
                  aspect ratio
                </a>
              </li>
              <li>
                specify the dimensions of the original image in{' '}
                <a href="/intrinsic" target="_blank" rel="noreferrer">
                  intrinsic
                </a>
                property as in <Code>intrinsic="3840x2160"</Code>
              </li>
            </ul>
            <p>
              Your hero media should resize itself according to the viewport while preserving its
              intrinsic ratio aspect.
            </p>
            <p>
              <strong>Change the dimensions of your browser </strong>
              to see the image adapt it's new viewport.
            </p>
          </TwicAbstract>
          <div className="hero">
            <TwicImg src="components/goldenGate.jpg" ratio="none" intrinsic="3840x2160" />
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
