import React, { FC } from "react";
import styled from 'styled-components';
// import Wireframe from './../../../Components/Wireframe'
import PrograBG from './prograImg.png'
import Carousel from 'nuka-carousel'


const Container = styled.div<{bgImg: string}>`
  height: 100%;
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
  font-family: "SpockEss";
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
  height: 100%;
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
  width: 25%;
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


export const Display: FC = () => {
  return (
    // <Wireframe>
      <Container bgImg= {PrograBG}>
        <ProgramOrganize>
          <TitleContainer>
            <Title> Programação</Title>
          </TitleContainer>
          <Line />
          <CarouselFlex>
            <CarouselFit>
              <Carousel style = {{height: "100%", width: "100%"}} /* autoplay="true" */ wrapAround>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        13/09 - Segunda Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        15h00 às 18h00 - Oficina de "Introdução Musical" com o Logic PRO" com Maika Julieta (SP) <br /> @malkajulieta.b
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        14/09 - Terça Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        15h00 às 18h00 - Oficina de "Introdução Musical" com o Logic PRO" com Maika Julieta (SP) <br /> @malkajulieta.b
                      </BlockText>
                      <BlockText>
                        19h00 - Roda de Conversa: "A resistência e a representatividade LGBTQIA+ no parlamento brasileiro" 
                        <br /> Mediação: Érika Carvalho 
                        <br /> Participantes: Quatro parlamentares LGBTQIAP+
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        14/09 - Terça Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        20h30 - Performances: 
                        <br /> “Além de Preto…”
                        <br /> Denilson Tourinho (MG) 
                        <br /> @denilsontourinho
                        <br />
                        <br /> “Pocketcheka show in Plural”
                        <br /> Kael Studart (SP/DF) 
                        <br /> @kaelstudart
                      </BlockText>
                      <BlockText>
                        21h00 - Mostra de filmes - curtas brasileiros
                        <br /> Exibição de curtas brasileiros premiados no Festival For Rainbow (CE) @festivalforrainbow
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
                        15h00 às 18h00 - Oficina de “Vogue” 
                        <br /> Úrsula Zion (DF)
                        <br /> @ursula.zion
                      </BlockText>
                      <BlockText>
                        19h00 - Roda de Conversa “Economia e Mercado Cultural LGBTQIA+”
                        <br /> Artur Santoro (SP) 
                        <br /> Bárbara Iara Hugo (SP/DF)
                        <br /> Mc Delacroix (SP) 
                        <br /> Sandro Rosa (RJ)
                        <br /> Dário Bezerra (CE)
                        <br /> Mediação: Marta Carvalho
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        15/09 - Quarta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        20h30 - Performances 
                        <br /> “A vida durante a Guerra”
                        <br /> Élle de Bernardini (SP)  
                        <br /> @elleiote
                      </BlockText>
                      <BlockText>
                        21h00 - Mostra de filmes - curtas brasileiros
                        <br /> Exibição de curtas brasileiros premiados no Festival For Rainbow (CE) @festivalforrainbow
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        16/09 - Quinta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        19h00 - Live com Spartakus (BA)
                        <br /> @spartakus
                        <br /> “Estratégias para hackear o sistema e sobreviver ao racismo e a LGBTfobia” 
                        <br /> Spartakus e convidados do Festival: Denilson Tourinho (MG), Moara (DF) e Úrsula Zion (DF)
                      </BlockText>
                      <BlockText>
                        20h00 - Batalha de “Vogue” parceria com a COB TV @cob.tv
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
                <ProgramContainer>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        17/09 - Sexta Feira
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        20h00 - Show Haynna e os Verdes (DF) 
                        <br /> @haynnaeosverdes
                      </BlockText>
                      <BlockText>
                        Mostra de Fotografias do concurso #InstaPlural2021. Premiados
                      </BlockText>
                      <BlockText>
                        20h30 - Show Rosa Luz (DF)
                        <br /> @ros4luz
                      </BlockText>
                      <BlockText>
                        21h - Show Johnny Hooker (PE)
                        <br /> @johnnyhooker
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                  <ProgramBlock>
                    <BlockTitle>
                      <div style={{color: "white", border: "3px solid white", borderRadius: 20, padding: 10}}>
                        18/09 - Sábado
                      </div>
                    </BlockTitle>
                    <Line />
                    <BlockContent>
                      <BlockText>
                        20h00 - Show Moara (DF)
                        <br /> @moaramusica
                      </BlockText>
                      <BlockText>
                        Mostra de Fotografias do concurso #InstaPlural2021.
                      </BlockText>
                      <BlockText>
                        20h30 - Show  Mar Nóbrega e Carol Nóbrega (DF)
                        <br /> @marnobregamusica
                        <br /> @carolnomar 
                      </BlockText>
                      <BlockText>
                        21h - Show URIAS (SP) 
                        <br /> @uriasss 
                      </BlockText>
                    </BlockContent>
                  </ProgramBlock>
                </ProgramContainer>
              </Carousel>
            </CarouselFit>
          </CarouselFlex>
        </ProgramOrganize>
      </Container>
    // </Wireframe>
  )
}

export default Display
