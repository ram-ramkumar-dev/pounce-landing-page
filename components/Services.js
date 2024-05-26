// components/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  /* Add your styles here */
`;

const Services = ({ data }) => {
  return (
    <ServicesContainer>
      {data.map((service) => (
        <div key={service.id}>
          <img src={service.icon.url} alt={service.title} />
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </ServicesContainer>
  );
};

export default Services;
