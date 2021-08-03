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

const ImageContainer = styled.div`
/*   flex-grow: 10; */
  height: 90%;
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
  justify-content: center;
  align-items: center;
`;

const PoppedText = styled.div`
  color: white;
`;

export interface DisplayProps {
  data: ImagemConcurso[]
}

const ImageDisplay: FC<{image: ImagemConcurso, id: string}> = ({ image, id }) => (
  <Popup
    trigger={<Image bgImg={image.foto.url} id={id} style={{cursor: "pointer"}}/>}
    modal key={image.id}
  >
    <Popped>
      <PoppedImg bgImg={image.foto.url}/>
      <PoppedTextContainer>
        <PoppedText>{image.titulo}</PoppedText>
      </PoppedTextContainer>
    </Popped>
  </Popup>
)

export const Display: FC<DisplayProps> = ({data}) => {
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
              {data.map((element, index) => {
                return (<ImageDisplay image={element} id={`a${index}`} />)
              })}
            </Content>
            <Content>
              {data.map((element, index) => {
                return (<ImageDisplay image={element} id={`a${index}`} />)
              })}
            </Content>
            <Content>
              {data.map((element, index) => {
                return (<ImageDisplay image={element} id={`a${index}`} />)
              })}
            </Content>
          </ImageContainer>
        </PhotoOrganize>
      </Container>
    </Wireframe>
  )
}

export default Display
