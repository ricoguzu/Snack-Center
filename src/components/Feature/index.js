import React from 'react'
import {FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
    return (
      <FeatureContainer>
          <h1>HamBurger of the Day</h1>
          <p>Steak Burger: prepared with ground, sliced or minced beefsteak meat.</p>
          <FeatureButton>Order Now</FeatureButton>
      </FeatureContainer>
    )
}

export default Feature
