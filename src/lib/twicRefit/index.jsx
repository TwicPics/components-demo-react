/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { Code } from '../components/code';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';

const imgUrl = `components/refit/dog-looking-water.jpg`;

const config = [
  {
    mode: `cover`,
    refit: true
  },
  {
    mode: `cover`,
    refit: `5p`
  },
  {
    mode: `contain`,
    refit: true
  },
  {
    mode: `contain`,
    refit: `5p`
  }
];

export const TwicRefit = () => {
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
    <>
      <TwicWrapper filename="src/lib/twicRefit/index.jsx">
        <TwicAbstract title="refit property">
          <p>
            <strong>
              The <dfn>refit</dfn> property:
            </strong>
          </p>
          <ul>
            <li>
              reframes the image to maximize the area occupied by the main object(s) while respecting <a href="/ratio" target="_blank" rel="noreferrer"> ratio </a> in <Code>cover</Code> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
            </li>
            <li>
              crops the image as close as possible to the main object(s) in <Code>contain</Code> <a href="/mode" target="_blank" rel="noreferrer"> mode </a>.
            </li>
          </ul>
          <p>
            To enable <dfn>refit</dfn>, simply add the <Code>refit</Code> property to the <Code
              >TwicImg</Code
            > component like in
            <Code>&lt;TwicImg src="image.jpg" refit/&gt;</Code>
          </p>
          <p>
            By default, the subject will be placed at the center of the resulting image but
            <strong> it is possible to align the subject</strong> with a given border by specifying an
            <a href="/anchor" target="_blank" rel="noreferrer"> anchor </a>
            .
          </p>
          <p>
            Also by default, the subject will touch the borders of the resulting image. This can be
            avoided by <strong>adding padding</strong> like in
            <Code>&lt;TwicImg src="image.jpg" refit="5p"/&gt;</Code>.
          </p>
          <p>
            <a
              href="https://www.twicpics.com/blog/discover-the-refit-transformation?utm_source=github&utm_medium=organic&utm_campaign=components#span-classexperimentalachromatopsiaspan"
              target="_blank"
              rel="noreferrer"
            >
              Want to see more examples?
            </a>
          </p>
        </TwicAbstract>
        <div className="twic-testing-container">
          <button className="twic-button" onClick={changeIndiceConfig}>
            Click to change props
          </button>
        </div>
        <div className="twic-grid">
          <div className="twic-item">
            <TwicImg src={`${imgUrl}?${indiceConfig}`}  ratio="4/3" mode={actualConfig.mode} />
            <span> Original image + mode="{actualConfig.mode}" </span>
          </div>
          <div className="twic-item">
            <TwicImg src={imgUrl} ratio="4/3" mode={actualConfig.mode} refit={actualConfig.refit} />
            <span>
              {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`} + mode="
              {actualConfig.mode}"
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src={imgUrl}
              anchor="left"
              mode={actualConfig.mode}
              ratio="4/3"
              refit={actualConfig.refit}
            />
            <span>
              {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`} + mode="
              {actualConfig.mode}" + anchor="left"
            </span>
          </div>
          <div className="twic-item">
            <TwicImg
              src={imgUrl}
              anchor="right"
              mode={actualConfig.mode}
              ratio="4/3"
              refit={actualConfig.refit}
            />
            <span>
              {actualConfig.refit === true ? `refit` : `refit="${actualConfig.refit}"`} + mode="
              {actualConfig.mode}" + anchor="right"
            </span>
          </div>
        </div>
      </TwicWrapper>
    </>
  );
};
