import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import FotografiaBG from './fotografiaImg.png'

const Container = styled.div<{bgImg: string}>`
  display: flex;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {FotografiaBG}>
      </Container>
    </Wireframe>
  )
}

export default Display
