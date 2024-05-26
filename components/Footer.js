// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  /* Add your styles here */
`;

const Footer = ({ data }) => {
  return (
    <FooterContainer>
      <p>{data.text}</p>
      <ul>
        {data.links.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
    </FooterContainer>
  );
};

export default Footer;
