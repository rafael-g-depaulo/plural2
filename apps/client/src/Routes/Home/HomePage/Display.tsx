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
import HomeImg5 from '../imagens/plurafinal_05.jpg'
import HomeImg6 from '../imagens/plurafinal_06.png'
import HomeMobile1 from '../imagens/mobile_1.png'
import HomeMobile2 from '../imagens/mobile_2.png'
import HomeMobile3 from '../imagens/mobile_3.png'
import HomeMobile4 from '../imagens/mobile_4.png'
import HomeMobile4_2 from '../imagens/mobile_4.2.png'
import HomeMobile5 from '../imagens/mobile_5.jpg'
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

const mobileImgs  = [HomeMobile1, HomeMobile2, HomeMobile3, HomeMobile4, HomeMobile4_2, HomeMobile5, HomeMobile6] 
const webImgs     = [HomeImg1, HomeImg2, HomeImg3,HomeImg4, HomeImg5, HomeImg6]

export const Display: FC = () => {
  const width = useWidth()
  const imgArr = width >= mobileLarge ? webImgs : mobileImgs
  return (
    // <Wireframe>
      <Container>
        <Carousel heightMode="current" autoplay wrapAround>
          {imgArr.map((imgSrc, i) => {
            return (<Image bgImg={imgSrc} key={i} />)
          })}
        </Carousel>
      </Container>
    // </Wireframe>
  )
}

export default Display
