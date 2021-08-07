import React, { FC } from "react";
import styled from 'styled-components';
// import Wireframe from './../../../Components/Wireframe'
import Carousel from 'nuka-carousel'
import useWidth from 'Hooks/useWidth';
import { mobileLarge } from 'Utils/breakpoints/mobileOnly';
import HomeImg1 from '../imagens/plurafinal_01.png'
import HomeImg2 from '../imagens/plurafinal_02.png'
import HomeImg3 from '../imagens/plurafinal_03.png'
import HomeImg4 from '../imagens/plurafinal_04.png'
import HomeImg5 from '../imagens/plurafinal_05.png'
import HomeImg6 from '../imagens/plurafinal_06.png'
import HomeMobile1 from '../imagens/mobile_1.png'
import HomeMobile2 from '../imagens/mobile_2.png'
import HomeMobile3 from '../imagens/mobile_3.png'
import HomeMobile4 from '../imagens/mobile_4.png'
import HomeMobile5 from '../imagens/mobile_5.png'
import HomeMobile6 from '../imagens/mobile_6.png'

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Image = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  aspect-ratio: 16/9;
  object-fit: contain;
`;

export const Display: FC = () => {
  const width = useWidth()
  return (
    // <Wireframe>
      <Container>
        <Carousel heightMode="current" autoplay wrapAround>
          <Image bgImg = {width >= mobileLarge ? HomeImg1 : HomeMobile1}></Image>
          <Image bgImg = {width >= mobileLarge ? HomeImg2 : HomeMobile2}></Image>
          <Image bgImg = {width >= mobileLarge ? HomeImg3 : HomeMobile3}></Image>
          <Image bgImg = {width >= mobileLarge ? HomeImg4 : HomeMobile4}></Image>
          <Image bgImg = {width >= mobileLarge ? HomeImg5 : HomeMobile5}></Image>
          <Image bgImg = {width >= mobileLarge ? HomeImg6 : HomeMobile6}></Image>
        </Carousel>
      </Container>
    // </Wireframe>
  )
}

export default Display
