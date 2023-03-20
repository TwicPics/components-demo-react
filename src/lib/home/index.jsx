import React from 'react';
import { TwicWrapper } from '../components/demo-wrapper/twicWrapper';
import { NavLink } from 'react-router-dom';
import { TwicImg, TwicVideo } from '@twicpics/components/react';
import './index.scss';

const categories = [
  {
    title: `Use cases`,
    items: [
      {
        route: `/art-directions`,
        imgSrc: `components/greece.jpg`,
        title: `Art directions`
      },
      {
        route: `/basic-grid`,
        imgSrc: `https://assets.twicpics.com/examples/football.jpg`,
        title: `Basic example`
      },
      {
        route: `/bulk-loading`,
        imgSrc: `components/bulk-loading/pool-1.jpg`,
        focus: `50px100p`,
        title: `Bulk loading`
      },
      {
        route: `/color-blindness`,
        imgSrc: `components/color-blindless/umbrellas.jpg`,
        title: `Color blindness`
      },
      {
        route: `/flip-cards`,
        imgSrc: `components/flip/orange-1.jpg`,
        title: `Flip cards`
      },
      {
        route: `/grid-and-zoom`,
        imgSrc: `components/portraits/woman-1.jpg`,
        title: `Grid & zoom`
      },
      {
        route: `/hero`,
        imgSrc: `components/goldenGate.jpg`,
        title: `Hero image`
      },
      {
        route: `/modal`,
        imgSrc: `components/modal/seagull.jpg`,
        title: `Modal`
      },
      {
        route: `/page-templating`,
        focus: `bottom`,
        imgSrc: `components/woman.jpg`,
        title: `Page templating`
      },
      {
        route: `/short-videos`,
        videoSrc: `video/skater.mp4`,
        title: `Short videos`,
        intrinsic: '1280x720'
      },
      {
        route: `/slider`,
        imgSrc: `components/slider/pantone.jpg`,
        title: `Slider`
      },
      {
        route: `/slideshow`,
        imgSrc: `components/slideshow/space-1.jpg`,
        title: `Slideshow`
      },
      {
        route: `/style-driven`,
        imgSrc: `components/horse.jpg`,
        title: `Style driven`
      }
    ]
  },
  {
    title: `Properties`,
    items: [
      {
        route: `/anchor`,
        imgSrc: `components/anchor/anchor.jpg`,
        title: `anchor`
      },
      {
        route: `/bot`,
        imgSrc: `components/bot/robot.jpg`,
        title: `bot`
      },
      {
        route: `/eager`,
        imgSrc: `components/eager/subway-1.jpg`,
        preTransform: `flip=x`,
        title: `eager`
      },
      {
        route: `/focus`,
        imgSrc: `components/puppy.jpg`,
        title: `focus`
      },
      {
        route: `/intrinsic`,
        imgSrc: `components/intrinsic/moon.jpg`,
        focus: `50px50p`,
        title: `intrinsic`
      },
      {
        route: `/mode`,
        imgSrc: `components/fox.jpg`,
        title: `mode`
      },
      {
        route: `/placeholder`,
        imgSrc: `components/cat.jpg`,
        focus: `50px50p`,
        title: `placeholder`
      },
      {
        route: `/position`,
        imgSrc: `components/position/horse.jpg`,
        focus: `50px50p`,
        title: `position`
      },
      {
        route: `/pre-transform`,
        imgSrc: `components/man-hiding-his-hands.jpg`,
        title: `preTransform`
      },
      {
        route: `/ratio`,
        imgSrc: `components/woman-and-winter.jpg`,
        focus: `50px50p`,
        title: `ratio`
      },
      {
        route: `/state`,
        imgSrc: `components/state/autumn.jpg`,
        title: `state`
      },
      {
        route: `/transition`,
        imgSrc: `components/peacock.jpg`,
        title: `transition`
      },
      {
        route: `/zoom`,
        imgSrc: `components/zoom/stamps-on-booklet.jpg`,
        title: `zoom`
      }
    ]
  }
];

export const Home = () => {
  return (
    <TwicWrapper>
      <div className="home-container">
        {categories.map((category, i) => (
          <div className="twic-panel" key={`category ${i}`}>
            <h3>{category.title}</h3>
            <div className="twic-grid">
              {category.items.map((item, j) => (
                <NavLink to={item.route} key={`useCase ${j}`}>
                  <figure className="twic-item">
                    {item.imgSrc ? (
                      <TwicImg
                        src={item.imgSrc}
                        focus={item.focus ? item.focus : 'auto'}
                        ratio="0.95"
                      />
                    ) : (
                      <TwicVideo src={item.videoSrc} ratio="0.95" intrinsic={item.intrinsic} />
                    )}
                    <figcaption>
                      <p>{item.title}</p>
                    </figcaption>
                  </figure>
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>
    </TwicWrapper>
  );
};
