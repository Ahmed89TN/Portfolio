import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import './style.scss';
import IMG from "./IMG.png";
const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, bgPrimary}
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: '#000000' }}>
            <div className="row">
            <div className="col">
            <p>
              <h2 style={{ color: colorPrimary }}>I'm a Jr. Full Stack Developer offering enthusiasm and understanding of front-end frameworks like React, 
               advanced CSS, and SASS techniques. I'm also skillful with back-end frameworks like Node.js, Express.js, Mysql, and mongoDB.
                 I have the ability to design and develop beautiful and functional websites using the latest technologies and web guidelines.</h2>
            </p>
            </div>
           
            <div className="col-6">
            <img src={IMG} className="logo" alt="me"  />
            </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
