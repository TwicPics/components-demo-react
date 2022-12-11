import React from 'react';
import './App.scss';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import Home from './lib/components/home';
/*import TwicArtDirections from './components/twicArtDirections';
import TwicBasicGrid from './components/twicBasicGrid';
import TwicFlipCards from './components/twicFlipCards';
import TwicFocus from './components/twicFocus';
import TwicGridAndZoom from './components/twicGridAndZoom';
import TwicModal from './components/twicModal';
import TwicMode from './components/twicMode';
import TwicPlaceholder from './components/twicPlaceholder';
import TwicPosition from './components/twicPosition';
import TwicRatio from './components/twicRatio';
import TwicSlider from './components/twicSlider';
import TwicSlideshow from './components/twicSlideshow';
import TwicStyleDriven from './components/twicStyleDriven';
import TwicTransition from './components/twicTransition';
*/
const App = () => {
  const routes = useRoutes([{ path: '/', element: <Home /> }]);
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
