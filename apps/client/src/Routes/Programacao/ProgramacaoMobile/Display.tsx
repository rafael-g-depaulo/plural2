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
  border-radius: 3px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BlockTitle = styled.div`
  height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockContent = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: space-between;
  
  border: 3px solid white;
  border-radius: 20px;
  padding: 10px;
`;

const BlockText = styled.div`
  text-align: center;
  height: auto;
  color: white;
  text-shadow: -1px 1px 0 #000,
                1px 1px 0 #000,
                1px -1px 0 #000,
                -1px -1px 0 #000;
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
              <Carousel style = {{height: "100%", width: "100%"}} wrapAround>
                <ProgramContainer>
                  <ProgramBlock >
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        13/09 - Segunda Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        15:00 - Oficina de Introdução <br /> a produção musical com Logic PRO <br /> com Maika Julieta
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        14/09 - Terça Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        15:00 - Oficina de Introdução <br /> a produção musical com Logic PRO <br /> com Maika Julieta
                      </BlockText>
                      <BlockText>
                        19:00 - A resistência e a <br /> representatividade LGBTQIA+ no <br /> parlamento brasileiro <br />com 04 convidades e 01 mediadore
                      </BlockText>
                      <BlockText>
                        19:30 - Mostra de Fotografia
                      </BlockText>
                      <BlockText>
                        20:00 - Mostra de Cinema Queer
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        15/09 - Quarta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        15:00 - Oficina de Vogue 
                      </BlockText>
                      <BlockText>
                        19:00 - Roda de Conversa – Tema: <br /> Economia e Mercado Cultural LGBTQIA+ <br /> com 04 convidades e 01 mediadore
                      </BlockText>
                      <BlockText>
                        20:30 - Mostra de Fotografia
                      </BlockText>
                      <BlockText>
                        21:00 - Mostra de Cinema Queer
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        16/09 - Quinta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        19:00 - Performances com <br /> Élle de Bernardini (SP), Denilson <br /> 
                        Tourinho (MG), Kael Studart (SP/DF) <br /> e Jajá Rolim (PT/DF)
                      </BlockText>
                      <BlockText>
                        20:00 - Live com Influencer <br /> Spartakus (BA)
                      </BlockText>
                      <BlockText>
                        21:00 - Batalha de Vogue
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock >
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        17/09 - Sexta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        Música a partir das 20h com:
                      </BlockText>
                      <BlockText>
                        Haynna e os Verdes (DF) <br /> 
                        @haynnaeosverdes <br />
                        /HaynnaeOsVerdes
                      </BlockText>
                      <BlockText>
                        Rosa Luz (DF) <br />
                        @ros4luz <br />
                        /Ros4
                      </BlockText>
                      <BlockText>
                        As Baías (SP) <br />
                        @asbaias <br />
                        /AsBaías
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        18/09 - Sábado
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        Música a partir das 20h com:
                      </BlockText>
                      <BlockText>
                        Moara (DF) <br />
                        @moaramusica <br />
                        /moara
                      </BlockText>
                      <BlockText>
                        Mar e Carol Nóbrega (DF) <br />
                        @carolnomar <br />
                        @marnobregamusica <br />
                        /CarolNóbrega
                      </BlockText>
                      <BlockText>
                        Johnny hooker (PE) <br />
                        @JohnnyHooker <br />
                        /JohnnyHookerBR 
                      </BlockText>
                    </BlockContent>
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
