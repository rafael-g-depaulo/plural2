import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  bottom: 0px;

  background: #F0772D;
`;

const Footer: React.FC = () => {
  return (
    <FooterStyle></FooterStyle>
  );
}

export default Footer
