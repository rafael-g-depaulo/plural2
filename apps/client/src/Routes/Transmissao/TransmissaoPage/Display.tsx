import React, { FC } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy'
import Wireframe from './../../../Components/Wireframe'
import TransmBG from './transmImg.png'

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
  height: 10%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  text-align: center;
  color: white;
  font-size: large;
`;

const Line = styled.div`
  background-color: white;
  margin: 10px;
  height: 1px;
  width: 80%;
  radius: 3px;
`;

const VideoContainer = styled.div`
  display: flex;
/*   flex-grow: 10; */
  height: 90%;
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
          <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'/>
        </VideoContainer>
      </Container>
    </Wireframe>
  )
}

export default Display
