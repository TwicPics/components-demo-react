import React from 'react';
import './index.scss';
export const TwicAbstract = ({ title, children }) => (
  <div className="twic-abstract">
    <h1>{title}</h1>
    <div>{children}</div>
  </div>
);
