/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

export const TwicIntrinsic = () => {
  return (
    <div id="twic-intrinsic-container">
      <TwicWrapper gitHubUrl="src/lib/TwicIntrinsic.svelte">
        <div className="demo-container">
          <TwicAbstract title="intrinsic property">
            <p>
              <strong>
                The <dfn>intrinsic</dfn> property allows to specify the intrinsic dimensions of the
                image or video in pixel as in <Code>intrinsic="3840x2160"</Code>
              </strong>
            </p>
            <p>It prevents image or video upscaling and limits the number of generated variants</p>
            <p>
              Especially recommended when your image or video master has potentially smaller
              dimensions than those that may be displayed.
            </p>
            <p>
              This is often the case when using{' '}
              <a href="/hero" target="_blank" rel="noreferrer">
                hero images and videos
              </a>
              .
            </p>
          </TwicAbstract>
          <div className="hero">
            <TwicImg src="components/fantasy.jpg" ratio="none" intrinsic="6526x3000" />
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
