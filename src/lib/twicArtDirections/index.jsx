import React from 'react';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const imgUrl = `components/greece.jpg`;

export const TwicArtDirections = () => {
  return (
    <div id="twic-art-direction-container">
      <TwicWrapper gitHubUrl="src/lib/twicArtDirections/index.jsx">
        <TwicAbstract title="Art directions with CSS media queries">
          <p>Setting up components using CSS enables hassle-free responsive designs.</p>
          <p>You do not need to create a set of images derived from the original.</p>
          <p>
            You only need to manage a master image in your template: TwicPics understands your CSS
            and does the rest.
          </p>
          <p>
            <strong>Change the width of your browser </strong>
            to see the image ratio adapt according to the CSS rules.
          </p>
        </TwicAbstract>
        <div className="twic-item style-driven-responsive">
          <TwicImg src={imgUrl} focus="48px100p" />
        </div>
      </TwicWrapper>
    </div>
  );
};
