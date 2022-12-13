import React from 'react';
import { TwicImg } from '@twicpics/components/react';
import './index.scss';
export const Modal = (props) => {
  const { image, show, onClose } = props;
  if (!show) {
    return null;
  }
  return (
    <div className={`modal ${show ? `modal-opened` : ``} `} onClick={onClose}>
      <div className="modal-content">
        <div className="poster">
          <TwicImg src={image.url}></TwicImg>
        </div>
        <div>
          <h1>{image.caption}</h1>
          <p>
            Lorem ipsum dolor sit amet. Non illo natus aut quis dolores et voluptas aliquid. Et
            architecto libero rem itaque consectetur qui ducimus quos aut quos alias est nisi maxime
            et rerum nisi vel enim iure. Ut soluta sapiente sed quis voluptates
            <em>Nam dolore et omnis magnam non doloremque magnam</em>.
          </p>
        </div>
      </div>
    </div>
  );
};
