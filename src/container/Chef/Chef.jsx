import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">

      <img src={images.chef} alt="chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__coromorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote"/>
              <p className="p__opensans">Although a great restaurant experience must include great food, a bad restaurant experience can be achieved through bad service alone. Ideally, service is invisib goes wrong. ― Dana Spiotta</p>
          </div>
        </div>

      <div className="app__chef-sign">
        <p>Rakesh Malotra</p>
        <p className="p__opensans">Chef & founder</p>
        <img src={images.sign} alt="sign"/>
      </div>
    </div>
  </div>
);

export default Chef;