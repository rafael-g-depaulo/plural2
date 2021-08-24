import React, { useMemo } from 'react';
import { Parceiros } from 'Api/Parceiros';
import styled from 'styled-components';

import bg from "./Rectangle 140.png"

const FooterBackground = styled.div`
  background: url("${bg}"), #F0772D;
`

const FooterContainer = styled.div`
  padding: 2.4em 0;
  margin: auto;
  gap: 0.8em;
  max-width: 60em;

  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 0;
    text-align: center;
    font-family: "Spock";
    font-style: italic;
    font-weight: bold;
    font-size: 26px;
    line-height: 48px;
  }
`;

const PartnerList = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;
`
const Label = styled.span`
  font-style: italic;
  * + & {
    margin-left: 0.4rem;
  }
`
const PImg = styled.img`
  height: 3.2rem;
`

export interface DisplayProps {
  data: Parceiros
}

const Display: React.FC<DisplayProps> = ({ data }) => {
  const pGroups = useMemo(() => data.Parceiros, [data])
  
  return (
    <FooterBackground>
      <FooterContainer>
        <h2>Nossos Parceiros</h2>
        <PartnerList>
          {pGroups.map(({ nome, parceiros }) => (
            <>
              {nome && <Label>{nome}:</Label>}
              {parceiros.map(parceiro => (
                <PImg src={parceiro.url} alt={parceiro.alternativeText} />
                ))}
            </>
          ))
        }</PartnerList>
      </FooterContainer>
    </FooterBackground>
  );
}

export default Display
