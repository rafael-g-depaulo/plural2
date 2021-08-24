import { useParceiros } from 'Api/Parceiros';
import React from 'react';
import styled from 'styled-components';
import Display from './Display';

const EmptyFooter = styled.div`
  width: 100%;
  height: 50px;

  background: #F0772D;
`;
const Footer: React.FC = () => {
  const parceiros = useParceiros()

  if (parceiros.error || parceiros.isLoading) return <EmptyFooter />
  return <Display data={parceiros.data} />
}

export default Footer
