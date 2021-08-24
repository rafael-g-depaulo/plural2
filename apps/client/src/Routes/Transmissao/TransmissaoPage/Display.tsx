import React, { FC } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy'
// import Wireframe from './../../../Components/Wireframe'
import TransmBG from './transmImg.png'
import Antenas from './anteninhas.png'
import { VideoTrans } from "Api/VideoTransmissao";

const Container = styled.div<{bgImg: string}>`
  display: flex;
  height: 100%;
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
  font-family: "SpockEss";
`;

const Line = styled.div`
  background-color: white;
  margin: 10px;
  height: 1px;
  width: 80%;
  border-radius: 3px;
`;

const Antena = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 60% 100%;
  width: 50%;
  height: 30%;
`;

const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 3.2rem;
`;

export interface DisplayProps {
  data: VideoTrans
}


export const Web: FC<DisplayProps> = ({ data }) => {
  return (
    // <Wireframe>
      <Container bgImg= {TransmBG}>
        <TitleContainer>
          <Title> Transmissão </Title>
        </TitleContainer>
        <Line />
        <VideoContainer>
          <Antena bgImg= {Antenas} />
          <ReactPlayer url={data.link} style={{border: "50px solid black", borderRadius: 15}}/>
        </VideoContainer>
      </Container>
    // </Wireframe>
  )
}

export default Web
