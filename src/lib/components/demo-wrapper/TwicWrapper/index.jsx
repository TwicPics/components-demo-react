import React from 'react';
import githubLogo from '../../../../assets/github-mark-white.svg';
import stackBlitzLogo from '../../../../assets/stackblitz.svg';

import './index.scss';

export const TwicWrapper = ({ gitHubUrl, children }) => {
  const logoSrc = `https://assets.twicpics.com/demo/@twicpics-components/logos/react.png`;
  const redirect = `https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components`;
  const GITHUB = `https://github.com/TwicPics/components-demo-svelte3/blob/main`;
  const CODESANDBOX = `https://stackblitz.com/edit/github-wpprt7?file=`;
  const _codeSandBoxUrl = `${CODESANDBOX}${gitHubUrl || 'README.md'}`;
  const _gitHubUrl = gitHubUrl ? `${GITHUB}/blob/main/${gitHubUrl}` : GITHUB;
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
            <img className="framework-logo" src={logoSrc} alt="React Logo" />
          </h1>
        </a>
        <div className="ribbon">
          <div>
            <a target="_blank" href={_gitHubUrl} rel="noreferrer" title="Open in Github">
              <img className="github" src={githubLogo} alt="Open in Github" />
            </a>
            <a target="_blank" href={_codeSandBoxUrl} rel="noreferrer" title="Open in StackBlitz">
              <img className="github" src={stackBlitzLogo} alt="Open in StackBlitz" />
            </a>
          </div>
        </div>
        <div className="tags-container">
          <div className="tag tag-components">@twicpics-components</div>
          <a
            href={redirect}
            target="_blank"
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
