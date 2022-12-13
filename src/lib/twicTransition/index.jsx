/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/peacock.jpg`;

const TRANSITIONS_TEXT = `Click to reveal the transitions`;
const IMG_TEXT = `Click to show the images`;
export const TwicTransition = () => {
  const [showTransitions, setShowTransitions] = useState(false);

  const toggleTransitions = () => {
    setShowTransitions(!showTransitions);
  };
  return (
    <div id="twic-transition-container">
      <TwicWrapper gitHubUrl="src/lib/TwicTransition.svelte">
        <TwicAbstract title="transition properties">
          <p>
            <strong>
              The <dfn>transition</dfn> properties allow you to customize the effect used to reveal
              the image once it has been loaded
            </strong>
            .
          </p>
          <ul>
            <li>
              <Code>transition</Code>: determines how the image will be revealed once loaded
              (default:
              <Code>fade</Code>). The possible values are:
              <br />-<Code>fade</Code>, for a <em>fade in</em> effect
              <br />-<Code>zoom</Code>, for a <em>zoom</em> effect
              <br />-<Code>fade+zoom</Code>, for both&nbsp;
              <em>fade</em> and <em>zoom</em> effects
              <br />- or<Code>none</Code>, for no transition
            </li>
            <li>
              <Code>transitionDelay</Code>: transition delay of the transition effect
              (default:&nbsp;
              <Code>0ms</Code>).
            </li>
            <li>
              <Code>transitionDuration</Code>: duration of the transition effect (default:&nbsp;
              <Code>400ms</Code>).
            </li>
            <li>
              <Code>transitionTimingFunction</Code>: CSS timing function applied to the transition
              effect (default:
              <Code>ease</Code>).
            </li>
          </ul>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={toggleTransitions}>
            {showTransitions ? IMG_TEXT : TRANSITIONS_TEXT}
          </button>
        </div>
        <div className={`twic-grid ${showTransitions && `show-transitions`}`}>
          <div className="twic-item">
            <TwicImg src={imgUrl} placeholder="preview" />
            <span>Default values</span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} transition="none" placeholder="preview" />
            <span>
              <Code>transition="none"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} transition="zoom" />
            <span>
              <Code>transition="zoom"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} transition="fade" />
            <span>
              <Code>transition="fade"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} transition="fade+zoom" />
            <span>
              <Code>transition="fade+zoom"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} transitionDuration="2000ms" placeholder="preview" />
            <span>
              <Code>transitionDuration="2000ms"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src={imgUrl}
              transitionDuration="2000ms"
              transitionTimingFunction="linear"
              placeholder="preview"
            />
            <span>
              <Code>transitionDuration="2000ms"</Code>
              and<Code>transitionTimingFunction="linear"</Code>
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src={imgUrl}
              transitionDelay="2000ms"
              transitionTimingFunction="linear"
              placeholder="preview"
            />
            <span>
              <Code>transitionDelay="2000ms"</Code>
            </span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
