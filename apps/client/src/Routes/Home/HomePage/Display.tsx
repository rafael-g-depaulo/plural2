import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
/* import HomeBG from '../../Home/homeImg.png' */
import Carousel from 'nuka-carousel'
import HomeImg1 from '../imagens/plurafinal_01.png'
import HomeImg2 from '../imagens/plurafinal_02.png'
import HomeImg3 from '../imagens/plurafinal_03.png'
import HomeImg4 from '../imagens/plurafinal_04.png'
import HomeImg5 from '../imagens/plurafinal_05.png'
import HomeImg6 from '../imagens/plurafinal_06.png'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Image = styled.div<{bgImg: string}>`
  margin-top: 50px;
  margin-bottom: 50px;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: 100vh;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container>
        <Carousel>
          <Image bgImg = {HomeImg1}></Image>
          <Image bgImg = {HomeImg2}></Image>
          <Image bgImg = {HomeImg3}></Image>
          <Image bgImg = {HomeImg4}></Image>
          <Image bgImg = {HomeImg5}></Image>
          <Image bgImg = {HomeImg6}></Image>
        </Carousel>
      </Container>
    </Wireframe>
  )
}

export default Display
