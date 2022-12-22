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
      <TwicWrapper filename="src/lib/twicIntrinsic/index.jsx">
        <div className="demo-container">
          <TwicAbstract title="intrinsic property">
            <p>
              <strong>
                The <dfn>intrinsic</dfn> property allows to specify the intrinsic dimensions of the
                image or video in pixel as in<Code>intrinsic="1920x1179"</Code>
              </strong>
            </p>
            <p>It prevents image or video upscaling and limits the number of generated variants</p>
            <p>
              Especially recommended when your image or video master has potentially smaller
              dimensions than those that may be displayed.
            </p>
            <p>
              This is often the case when using&nbsp;
              <a href="/hero" target="_blank" rel="noreferrer">
                hero images and videos
              </a>
              .
            </p>
          </TwicAbstract>
          <div className="hero">
            <TwicImg src="components/intrinsic/moon.jpg" ratio="none" intrinsic="1920x1179" />
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
