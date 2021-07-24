import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import FichaBG from './fichaImg.png'

const Container = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  width: 100%;
  height: 100%;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <>
      <Wireframe>
        <Container bgImg= {FichaBG}>

        </Container>
      </Wireframe>
    </>
  )
}

export default Display
