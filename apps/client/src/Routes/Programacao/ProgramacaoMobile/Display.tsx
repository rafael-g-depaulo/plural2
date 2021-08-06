import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import PrograBG from './../ProgramacaoPage/prograImg.png'
import Carousel from 'nuka-carousel'


const Container = styled.div<{bgImg: string}>`
  display: flex;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
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

const ProgramOrganize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CarouselFlex = styled.div`
  height: 85%;
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: center;
  width: 100%;
`;

const CarouselFit = styled.div`
  height: 80%;
  width: 100%;
`;

const ProgramContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const ProgramBlock = styled.div`
  height: 50vh;
  width: 70%;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {PrograBG}>
        <ProgramOrganize>
          <TitleContainer>
            <Title> Programação</Title>
          </TitleContainer>
          <Line />
          <CarouselFlex>
            <CarouselFit>
              <Carousel style = {{height: "100%", width: "100%"}} autoplay="true" wrapAround="true">
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "yellow"}}>

                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "red"}}>

                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "white"}}>

                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "black"}}>

                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "green"}}>

                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock style = {{backgroundColor: "blue"}}>

                  </ProgramBlock>
                </ProgramContainer>
              </Carousel>
            </CarouselFit>
          </CarouselFlex>
        </ProgramOrganize>
      </Container>
    </Wireframe>
  )
}

export default Display
