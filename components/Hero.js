// components/Hero.js
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  /* Add your styles here */
`;

const Hero = ({ data }) => {
  return (
    <HeroContainer>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <img src={data.image.url} alt={data.title} />
    </HeroContainer>
  );
};

export default Hero;
