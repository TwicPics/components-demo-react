/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const config = [
  {
    anchor: "center",
    preTransform: 'flip=x',
    ratio: '4/3'
  },
  {
    anchor: 'left',
    preTransform: 'trit',
    ratio: '16/9'
  },
  {
    anchor: 'right',
    preTransform: 'focus=top-left/crop=50px50p',
    ratio: '21/9'
  }
];

export const TwicBot = () => {
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
    <div id="twic-bot-container">
      <TwicWrapper gitHubUrl="src/lib/twicBot/index.jsx">
        <TwicAbstract title="bot property">
          <p>
            <strong>
              The <dfn>bot</dfn> specifies a manipulation to be applied to the medium when search
              engine bots are visiting.
            </strong>
          </p>
          <p>
            Its goal is to optimize SEO by always giving the same image to the search engine bots
            even if they emulate different devices.
          </p>
          <p>
            The syntax is a slash-separated list of&nbsp;
            <a
              href="https://www.twicpics.com/docs/api/transformations?utm_source=github&utm_medium=organic&utm_campaign=components"
              target="_blank"
              rel="noreferrer"
            >
              TwicPics API transformations
            </a>
            .
          </p>
          <p>
            In the example bellow,<Code>bot</Code>has been set to "cover=400x400".
          </p>
          <p>
            While regular visitors will receive different variants depending on their browsing
            context, search engine bots will always get a 400 pixels wide, 400 pixels high version
            of your image.
          </p>
          <p>
            <strong>Sets your browser's user agent to a bot engine value</strong>
            &nbsp;to see how bots will perceive the images. Note that context changes then have no
            effect on the delivered image.
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={changeIndiceConfig}>
            Click to change context
          </button>
        </div>
        <div className="twic-grid">
          <div className="twic-item">
            <img src="https://demo.twic.pics/https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg?twic=v1/cover=400x400" />
            <span> Media seen by search engine bots </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
              bot="cover=400x400"
              ratio={actualConfig.ratio}
            />
            <span> Bot will override ratio="{actualConfig.ratio}" </span>
          </div>

          <div className="twic-item">
            <TwicImg
              src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
              bot="cover=400x400"
              preTransform={actualConfig.preTransform}
            />
            <span> Bot will override preTransform="{actualConfig.preTransform}"</span>
          </div>
          <div className="twic-item">
            <TwicImg
              src="https://assets.twicpics.com/demo/@twicpics-components/bot/robot.jpg"
              bot="cover=400x400"
              preTransform="cover=400x300"
              anchor={actualConfig.anchor}
            />
            <span> Bot will override anchor="{actualConfig.anchor}"</span>
          </div>
        </div>
      </TwicWrapper>
    </div>
  );
};
