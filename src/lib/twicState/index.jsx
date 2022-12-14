import React, { useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const config = [
  {
    src: 'components/state/autumn.jpg'
  },
  {
    src: 'components/state/winter.jpg'
  },
  {
    src: 'components/state/spring.jpg'
  },
  {
    src: 'components/state/summer.jpg'
  }
];

export const TwicState = () => {
  const [state, setState] = useState(``);
  const [indice, setIndice] = useState(0);
  const onStateChange = (event) => {
    const { state } = event;
    setState(state);
  };

  return (
    <div id="twic-state-container">
      <TwicWrapper gitHubUrl="src/lib/TwicState.svelte">
        <TwicAbstract title="state property and / or statechange event ">
          <p>
            You can access to the loading state of your image or video by passing a callback to
            <Code>onStateChange</Code> property.
          </p>
          <p>Here are the values the Component will emit :</p>
          <ul>
            <li>
              <Code>new</Code>: when the img or video source has not started loading
            </li>
            <li>
              <Code>loading</Code>: when the img or video source is loading
            </li>
            <li>
              <Code>done</Code>: when the img or video source has successfully loaded
            </li>
            <li>
              <Code>error</Code>: when an error occurred while loading the img or video source
            </li>
          </ul>
          <p>
            <strong>Change the width of your browser</strong> to see the image aspect-ratio adapt
            according to the CSS rules. The loading status should then also be updated.
          </p>
          <p>
            Current state is: <b>{state}</b>.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button
            className="twic-button"
            disabled={state !== `done` && state !== `error`}
            onClick={() => setIndice((indice + 1) % config.length)}
          >
            Click to load next image
          </button>
        </div>

        <div className="twic-item style-driven-responsive">
          <TwicImg src={config[indice].src} focus="48px100p" onStateChange={onStateChange} />
        </div>
      </TwicWrapper>
    </div>
  );
};
