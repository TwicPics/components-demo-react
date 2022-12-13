import React from 'react';
import './App.scss';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Home } from './lib/home';
import { TwicAnchor } from './lib/twicAnchor';
import { TwicArtDirections } from './lib/twicArtDirections';
import { TwicBasicGrid } from './lib/twicBasicGrid';
import { TwicBot } from './lib/twicBot';
import { TwicBulkLoading } from './lib/twicBulkLoading';
import { TwicColorBlindness } from './lib/twicColorBlindness';
import { TwicEager } from './lib/twicEager';
import { TwicFlipCards } from './lib/twicFlipCards';
import { TwicFocus } from './lib/twicFocus';
import { TwicGridAndZoom } from './lib/twicGridAndZoom';
import { TwicHero } from './lib/twicHero';
import { TwicIntrinsic } from './lib/twicIntrinsic';
import { TwicModal } from './lib/twicModal';
import { TwicMode } from './lib/twicMode';
import { TwicPageTemplating } from './lib/twicPageTemplating';
import { TwicPlaceholder } from './lib/twicPlaceholder';
import { TwicPosition } from './lib/twicPosition';
import { TwicPreTransform } from './lib/twicPreTransform';
import { TwicRatio } from './lib/twicRatio';
import { TwicShortVideos } from './lib/twicShortVideos';
import { TwicSlider } from './lib/twicSlider';
import { TwicSlideshow } from './lib/twicSlideshow';
import { TwicState } from './lib/twicState';
import { TwicStyleDriven } from './lib/twicStyleDriven';

import { TwicTransition } from './lib/twicTransition';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'anchor', element: <TwicAnchor /> },
    { path: 'art-directions', element: <TwicArtDirections /> },
    { path: 'basic-grid', element: <TwicBasicGrid /> },
    { path: 'bot', element: <TwicBot /> },
    { path: 'bulk-loading', element: <TwicBulkLoading /> },
    { path: 'color-blindness', element: <TwicColorBlindness /> },
    { path: 'eager', element: <TwicEager /> },
    { path: 'flip-cards', element: <TwicFlipCards /> },
    { path: 'focus', element: <TwicFocus /> },
    { path: 'grid-and-zoom', element: <TwicGridAndZoom /> },
    { path: 'hero', element: <TwicHero /> },
    { path: 'intrinsic', element: <TwicIntrinsic /> },
    { path: 'modal', element: <TwicModal /> },
    { path: 'mode', element: <TwicMode /> },
    { path: 'page-templating', element: <TwicPageTemplating /> },
    { path: 'placeholder', element: <TwicPlaceholder /> },
    { path: 'position', element: <TwicPosition /> },
    { path: 'pretransform', element: <TwicPreTransform /> },
    { path: 'ratio', element: <TwicRatio /> },
    { path: 'short-videos', element: <TwicShortVideos /> },
    { path: 'slider', element: <TwicSlider /> },
    { path: 'slideshow', element: <TwicSlideshow /> },
    { path: 'state', element: <TwicState /> },
    { path: 'style-driven', element: <TwicStyleDriven /> },
    { path: 'transition', element: <TwicTransition /> }
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
