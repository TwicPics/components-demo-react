import React from 'react';
import { TwicAbstract } from '../components/demo-wrapper/twicAbstract';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';

const cards = [
  {
    front: {
      url: `components/flip/orange-1.jpg`
    },
    back: {
      url: `components/flip/orange-2.jpg`
    }
  },
  {
    front: {
      url: `components/flip/fig-1.jpg`
    },
    back: {
      url: `components/flip/fig-2.jpg`
    }
  },
  {
    front: {
      url: `components/flip/cherry-3.jpg`
    },
    back: {
      url: `components/flip/cherry-2.jpg`
    }
  },
  {
    front: {
      url: `components/flip/melon-1.jpg`
    },
    back: {
      url: `components/flip/melon-2.jpg`
    }
  }
];

export const TwicFlipCards = () => {
  return (
    <div id="twic-flip-card-container">
      <TwicWrapper filename="src/lib/twicFlipCards/index.jsx">
        <TwicAbstract title="Flip cards">
          <p>Move your mouse over the images below.</p>
        </TwicAbstract>
        <div className="twic-grid">
          {cards.map((card, i) => (
            <div className="flip-card" key={i}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <figure className="twic-item">
                    <TwicImg src={`${card.front.url}`} focus="auto"></TwicImg>
                  </figure>
                </div>
                <div className="flip-card-back">
                  <figure className="twic-item">
                    <TwicImg src={`${card.back.url}`}></TwicImg>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TwicWrapper>
    </div>
  );
};
