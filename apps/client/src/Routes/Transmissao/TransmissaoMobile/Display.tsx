import React, { FC } from "react";
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy'
// import Wireframe from './../../../Components/Wireframe'
import TransmMobile from './transmMobile.png'

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
  max-width: 100%;
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

const VideoContainer = styled.div`
  display: flex;
  height: 85%;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export interface DisplayProps {
  data: string
}


export const Mobile: FC<DisplayProps> = (data) => {
  return (
    // <Wireframe>
      <Container bgImg= {TransmMobile}>
        <TitleContainer>
          <Title> Transmissão </Title>
        </TitleContainer>
        <Line />
        <VideoContainer> 
          <div style={{height:"60%", width:"100%"}}>
            <ReactPlayer url={data.data} height="100%" width="100%" id="teste" />
          </div>
        </VideoContainer>
      </Container>
    // </Wireframe>
  )
}

export default Mobile
