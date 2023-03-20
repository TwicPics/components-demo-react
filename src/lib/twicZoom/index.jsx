import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

export const TwicZoom = () => {
  const [zoom, setZoom] = useState(1.5);

  return (
    <div id="twic-zoom-container">
      <TwicWrapper filename="src/lib/twicZoom/index.jsx">
        <TwicAbstract title="zoom property">
          <p>
            <strong>
              The <dfn>zoom property</dfn> allows you to display a <dfn>lazy-loaded enlarged</dfn>{' '}
              version of your image when you hover the mouse
            </strong>
            .
          </p>
          <Code>zoom</Code> value
          <ul>
            <li>
              is a number <strong>strictly superior to 1</strong>
            </li>
            <li>
              can be set using the <Code>zoom</Code> prop of <Code>TwicImg</Code> component or
              through <Code>--twic-zoom</Code>
              <a href="/style-driven" target="_blank" rel="noreferrer">
                CSS variable
              </a>
              .
            </li>
            <li>
              can be combined with the{' '}
              <a href="/pre-transform" target="_blank" rel="noreferrer">
                preTransform
              </a>{' '}
              property
            </li>
          </ul>
          <p>
            We recommend using{' '}
            <a href="/intrinsic" target="_blank" rel="noreferrer">
              intrinsic
            </a>{' '}
            property to avoid upscaling.
          </p>
          <p>
            It applies only to <Code>TwicImg</Code> component in cover{' '}
            <a href="/mode" target="_blank" rel="noreferrer">
              mode
            </a>
            .
          </p>
        </TwicAbstract>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg zoom={zoom} src="components/zoom/stamps-on-booklet.jpg" intrinic="2996x4502" />
            <span>
              <Code>zoom="{zoom}"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              zoom={zoom}
              src="components/zoom/stamp-on-envelopes.jpg"
              intrinsic="2400x3600"
              ratio="4/3"
            />
            <span>
              <Code>ratio="4/3" + zoom="{zoom}"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              zoom="4"
              src="components/zoom/stamp-on-envelopes.jpg"
              preTransform="focus=40px35p/crop=800x800"
              intrinsic="800x800"
            />
            <span>
              <Code>preTransform + zoom="{zoom}"</Code>
            </span>
          </div>
        </div>
        <div className="twic-testing-container">
          <button
            className="twic-button"
            onClick={() => {
              setZoom(zoom + 0.5 > 4 ? 1.5 : zoom + 0.5);
            }}
          >
            Change zoom factor
          </button>
        </div>
      </TwicWrapper>
    </div>
  );
};
