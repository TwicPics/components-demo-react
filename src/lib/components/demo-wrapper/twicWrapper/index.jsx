import React from 'react';
import githubLogo from '../../../../assets/github-mark-white.svg';
import stackBlitzLogo from '../../../../assets/stackblitz.svg';

import './index.scss';

const GITHUB_REPO_NAME = `TwicPics/components-demo-react`;
const GITHUB = `https://github.com/${GITHUB_REPO_NAME}`;

export const TwicWrapper = ({ filename, children }) => {
  const frameworkLogo = `https://assets.twicpics.com/demo/@twicpics-components/logos/react.png`;
  const documentationUrl = `https://www.twicpics.com/docs/components/react?utm_source=github&utm_medium=organic&utm_campaign=components`;
  let onlineUrl = `https://stackblitz.com/github/${GITHUB_REPO_NAME}?file=${
    filename || 'README.md'
  }`;
  if (filename) {
    const test = /src\/lib\/twic(.*)\//.exec(filename);
    if (test) {
      // eslint-disable-next-line no-unused-vars
      let [_, initialPath] = test;
      initialPath = initialPath
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .join('-')
        .toLowerCase();
      onlineUrl = `${onlineUrl}&initialpath=${initialPath}`;
    }
  }
  const gitHubUrl = filename ? `${GITHUB}/blob/main/${filename}` : GITHUB;
  return (
    <div id="twic-demo-wrapper">
      <header id="twic-header">
        <a href="/" title="Home">
          <h1 className="heading-primary">
            <img
              className="twicpics-logo"
              src="https://assets.twicpics.com/demo/@twicpics-components/logos/twicpics-by-frontify.svg"
              alt="TwicPics logo"
            />
            <span>x</span>
            <img className="framework-logo" src={frameworkLogo} alt="React Logo" />
          </h1>
        </a>
        <div className="ribbon">
          <div>
            <a target="_blank" href={gitHubUrl} rel="noreferrer" title="Open in Github">
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
