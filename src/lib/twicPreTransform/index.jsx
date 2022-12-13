/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';

const imgUrl = `components/man-hiding-his-hands.jpg`;

export const TwicPreTransform = () => {
  return (
    <div id="twic-pretransform-container">
      <TwicWrapper gitHubUrl="src/lib/twicPreTransform/index.jsx">
        <TwicAbstract title="preTransform property">
          <p>
            <Code>preTransform</Code>is a slash-separated list of TwicPics API transformations that
            perform before the automatic resizing of the image.
          </p>
          <p>
            You can check the&nbsp;
            <a
              href="https://www.twicpics.com/docs/api/transformations"
              target="_blank"
              rel="noreferrer"
            >
              TwicPics documentation
            </a>
            &nbsp;to see the list of API transformations.
          </p>
          <p>
            If you set the<Code>focus</Code>property, it will apply before all transformations of
            the<Code>preTransform</Code>property.
          </p>
          <p>
            Be aware that using<Code>preTransform</Code>can lead to unexpected results, so use with
            caution!
          </p>
        </TwicAbstract>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg src={imgUrl} />
            <span>
              No<Code>preTransform</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} preTransform="crop=600x400" />
            <span>
              <Code>preTransform="crop=600x400"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} focus="100px100p" preTransform="crop=1400x1200" />
            <span>
              <Code>focus="100px100p"</Code>
              and<Code>preTransform="crop=1400x1200"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} preTransform="flip=x" />
            <span>
              <Code>preTransform="flip=x"</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
