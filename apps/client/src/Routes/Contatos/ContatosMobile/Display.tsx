import React, { FC } from "react";
import styled from 'styled-components';
// import Wireframe from './../../../Components/Wireframe'
import ContatosBG from './../ContatosPage/contatoImg.png'
import InstagramImg from './../ContatosPage/instagramIcon.png'
import FacebookImg from './../ContatosPage/facebookIcon.png'
import TwitterImg from './../ContatosPage/twitterIcon.png'
import YoutubeImg from './../ContatosPage/youtubeIcon.png'

const Container = styled.div<{ bgImg?: string }>`
  display: flex;
  height: 100%;
  min-height: 100vh;
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

const ContatosContainer = styled.div`
  display: flex;
  height: 85%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 7;
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

const AccessButton = styled.div`
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

const RedesSociais = styled.div<{ bgImg: string }>`
  background-image: url("${props => props.bgImg}");
  height: 41px;
  width: 41px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export interface DisplayProps {
  youtube?: string
  facebook?: string
  instagram?: string
  twitter?: string
  formulario?: string
}


export const Display: FC<DisplayProps> = ({ facebook, youtube, instagram, twitter, formulario }) => {
  return (
    // <Wireframe>
    <Container bgImg={ContatosBG}>
      <TitleContainer>
        <Title> Mapeamento e Contatos </Title>
      </TitleContainer>
      <Line />
      <ContatosContainer>
        <TextContainer>
          <div style={{ fontSize: 16, color: "white", padding: "0 1.6rem", alignText: "center" }}>
            Queremos conhecer os profissionais

            das artes LGBTQIA+, preencha nosso formul??rio
          </div>
        </TextContainer>
        {formulario &&
          <AccessButtonContainer>
            <AccessButton>
              <a href={formulario} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ color: "white", fontSize: 16, padding: 20 }}>
                  Clique para Acessar
                </div>
              </a>
            </AccessButton>
          </AccessButtonContainer>
        }
        <RedesSociaisContainer>
          <div style={{ color: "white", fontSize: 16 }}>
            Acesse tamb??m:
          </div>
          <IconsContainer>
            {instagram &&
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <RedesSociais bgImg={InstagramImg} />
              </a>
            }
            {facebook &&
              <a href={facebook} target="_blank" rel="noopener noreferrer">
                <RedesSociais bgImg={FacebookImg} />
              </a>
            }
            {twitter &&
              <a href={twitter} target="_blank" rel="noopener noreferrer">
                <RedesSociais bgImg={TwitterImg} />
              </a>
            }
            {youtube &&
              <a href={youtube} target="_blank" rel="noopener noreferrer">
                <RedesSociais bgImg={YoutubeImg} />
              </a>
            }
          </IconsContainer>
        </RedesSociaisContainer>
      </ContatosContainer>
    </Container>
    // </Wireframe>
  )
}

export default Display
