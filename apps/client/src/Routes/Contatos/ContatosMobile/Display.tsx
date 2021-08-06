import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import ContatosBG from './../ContatosPage/contatoImg.png'
import Instagram from './../ContatosPage/instagramIcon.png'
import Facebook from './../ContatosPage/facebookIcon.png'
import Twitter from './../ContatosPage/twitterIcon.png'
import Youtube from './../ContatosPage/youtubeIcon.png'

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

const ContatosContainer = styled.div`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const AccessButtonContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AccessButton =styled.div`
  background-color: #42D977;
  width: 60%;
  height: 80%;
  border: 10px;
  border-radius: 30px; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RedesSociaisContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`;

const IconsContainer = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;

const RedesSociais = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
  height: 41px;
  width: 41px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {ContatosBG}>
        <TitleContainer>
          <Title> Mapeamento e Contatos </Title>
        </TitleContainer>
        <Line />
        <ContatosContainer>
          <TextContainer>
            <div style={{fontSize: 16, color: "white"}}> 
              Queremos conhecer os profissionais 
            </div>
            <div style={{fontSize: 16, color: "white"}}>
              das artes LGBTQIA+, preencha nosso formulário 
            </div>
          </TextContainer> 
          <AccessButtonContainer>
            <AccessButton>
              <div style={{color: "white", fontSize: 16}}>
                Clique para Acessar
              </div>
            </AccessButton>
          </AccessButtonContainer>
          <RedesSociaisContainer>
            <div style={{color: "white", fontSize: 16}}> 
              Acesse também:
            </div>
            <IconsContainer>
              <RedesSociais  bgImg= {Instagram} />
              <RedesSociais  bgImg= {Facebook} />
              <RedesSociais  bgImg= {Twitter} />
              <RedesSociais  bgImg= {Youtube} />
            </IconsContainer>
          </RedesSociaisContainer>
        </ContatosContainer>
      </Container>
    </Wireframe>
  )
}

export default Display
