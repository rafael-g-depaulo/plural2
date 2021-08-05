import React, { FC } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy'
import Wireframe from './../../../Components/Wireframe'
import TransmBG from './transmImg.png'
import Antenas from './anteninhas.png'

const Container = styled.div<{bgImg: string}>`
  display: flex;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  margin-top: 10px;
  height: 15%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: large;
  padding: 15px;
  border: 2px solid white;
  border-radius: 25px;
`;

const Line = styled.div`
  background-color: white;
  margin: 10px;
  height: 1px;
  width: 80%;
  radius: 3px;
`;

const Antena = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 70% 100%;
  width: 100%;
  height: 30%;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: center;
  align-items: center;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {TransmBG} id ="esse">
        <TitleContainer>
          <Title> Transmissão </Title>
        </TitleContainer>
        <Line />
        <VideoContainer>
          <Antena bgImg= {Antenas} />
          <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style={{border: "50px solid black", borderRadius: 15}}/>
        </VideoContainer>
      </Container>
    </Wireframe>
  )
}

export default Display
