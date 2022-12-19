import React, { useEffect } from 'react';
import githubLogo from '../../../../assets/github-mark-white.svg';
import stackBlitzLogo from '../../../../assets/stackblitz.svg';

import './index.scss';

export const TwicWrapper = ({ gitHubUrl, children }) => {
  useEffect(() => {
    // eslint-disable-next-line no-undef
    const WebFont = require(`webfontloader`);
    WebFont.load({
      google: {
        families: [`Montserrat:400,600,700`]
      }
    });
  }, []);
  const frameworkLogo = `https://assets.twicpics.com/demo/@twicpics-components/logos/react.png`;
  const documentationUrl = `https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components`;
  const GITHUB = `https://github.com/TwicPics/components-demo-react`;
  const ONLINE_URL = `https://stackblitz.com/edit/github-wpprt7?file=`;
  const onlineUrl = `${ONLINE_URL}${gitHubUrl || 'README.md'}`;
  const gitHubRedirect = gitHubUrl ? `${GITHUB}/blob/main/${gitHubUrl}` : GITHUB;
  return (
    <div id="twic-demo-wrapper">
      <header id="twic-header">
        <a href="/" title="Home">
          <h1 className="heading-primary">
            <img
              className="twicpics-logo"
              src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics.svg"
              alt="TwicPics logo"
            />
            <span>x</span>
            <img className="framework-logo" src={frameworkLogo} alt="React Logo" />
          </h1>
        </a>
        <div className="ribbon">
          <div>
            <a target="_blank" href={gitHubRedirect} rel="noreferrer" title="Open in Github">
              <img className="github" src={githubLogo} alt="Open in Github" />
            </a>
            <a target="_blank" href={onlineUrl} rel="noreferrer" title="Open in StackBlitz">
              <img className="github" src={stackBlitzLogo} alt="Open in StackBlitz" />
            </a>
          </div>
        </div>
        <div className="tags-container">
          <div className="tag tag-components">@twicpics-components</div>
          <a
            target="_blank"
            href={documentationUrl}
            className="documentation-link tag tag--bg-purple-rain"
            rel="noreferrer"
          >
            Documentation
          </a>
        </div>
      </header>
      <main id="twic-demo-container">{children}</main>
    </div>
  );
};
