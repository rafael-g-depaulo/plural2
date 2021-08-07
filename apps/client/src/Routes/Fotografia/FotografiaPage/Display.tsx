import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import FotografiaBG from './fotografiaImg.png'

import Popup from 'reactjs-popup';
import { ImagemConcurso } from "Api/ImagensConcurso";

const Container = styled.div<{bgImg: string}>`
  display: flex;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
`;

const PhotoOrganize = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
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

const ImageContainer = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-between;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 100%;
`;

const Image = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100px;
  width: 100px;
  border: 1px solid white;
`;

const Popped = styled.div`
  height: 80vh;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  border: 5px solid #46A1AB;
  background-color: #46A1AB;
`;

const PoppedImg = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  width: 50%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const PoppedTextContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding: 5%;
`;

const PoppedTitleContainer = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const PoppedGeneralInfo = styled.div`
  height: 10%;
  width: 100%;
  color: white;
`;

const PoppedBio = styled.div`
  height: 45%;
  width: 100%;
  color: white;
`;

export interface DisplayProps {
  data1: ImagemConcurso[]
  data2: ImagemConcurso[]
  data3: ImagemConcurso[]
}

const ImageDisplay: FC<{image: ImagemConcurso, id: string}> = ({ image, id }) => (
  <Popup
    trigger={<Image bgImg={image.foto.url} id={id} style={{cursor: "pointer"}}/>}
    modal key={image.id}
  >
    <Popped>
      <PoppedImg bgImg={image.foto.url}/>
      <PoppedTextContainer>
        <PoppedTitleContainer>
          <div style = {{ fontSize: 42, color: "white"}}> {image.nome_autor} </div>
        </PoppedTitleContainer>
        <PoppedGeneralInfo> 
          <div style = {{ fontSize: 24, color: "white"}}> {image.idade_autor} anos </div>
        </PoppedGeneralInfo>
        <PoppedGeneralInfo> 
          <div style = {{ fontSize: 24, color: "white"}}> {image.cidade} </div>
        </PoppedGeneralInfo>
        <PoppedGeneralInfo> 
          <div style = {{ fontSize: 24, color: "white"}}> Título da obra: {image.titulo} </div>
        </PoppedGeneralInfo>
        <PoppedBio> 
          <div style = {{ fontSize: 24, color: "white"}}>  Bio: {image.bio} </div>
        </PoppedBio>
      </PoppedTextContainer>
    </Popped>
  </Popup>
)

export const Display: FC<DisplayProps> = ({data1, data2, data3}) => {
  return (
    <Wireframe>
      <Container bgImg= {FotografiaBG}>
        <PhotoOrganize>
          <TitleContainer>
            <Title> Mostra Fotográfica </Title>
          </TitleContainer>
          <Line />
          <ImageContainer>
            <Content> 
              {data1.map((element, index) => {
                return (<ImageDisplay image={element} id={`a${index}`} />)
              })}
            </Content>
            <Content>
              {data2.map((element, index) => {
                return (<ImageDisplay image={element} id={`b${index}`} />)
              })}
            </Content>
            <Content>
              {data3.map((element, index) => {
                return (<ImageDisplay image={element} id={`c${index}`} />)
              })}
            </Content>
          </ImageContainer>
        </PhotoOrganize>
      </Container>
    </Wireframe>
  )
}

export default Display
