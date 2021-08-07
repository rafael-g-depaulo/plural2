import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import FichaBG from './../FichaPage/fichaImg.png'
import Carousel from 'nuka-carousel'

const Container = styled.div<{bgImg: string}>`
  display: flex;
  background-image: url("${props => props.bgImg}");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 1;
`;

const FichaOrganize = styled.div`
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
`;

const Line = styled.div`
  background-color: white;
  margin: 10px;
  height: 1px;
  width: 80%;
  border-radius: 3px;
`;

const CarouselFlex = styled.div`
  height: 85%;
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: center;
  width: 100%;
`;


const ListColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 70vh;
  width: 70%;
`;

const ListContent = styled.div`
  text-align: center;
  height: auto;
  color: white;
`;

const CarouselFit = styled.div`
  height: 102%;
  width: 100%;
`;

const FichaColumnContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 100%;
`;


export interface DisplayProps {
  data: 'teste'
}

export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {FichaBG}>
        <FichaOrganize>
          <TitleContainer>
            <Title> Ficha Técnica </Title>
          </TitleContainer>
          <Line />
          <CarouselFlex>
            <CarouselFit>
              <Carousel heightMode="first" autoplay wrapAround >
                <FichaColumnContainer>
                  <ListColumn>
                    <ListContent>
                      Idealização:<br />

                      Yuri Rocha e Claudinei Pirelli
                    </ListContent>
                    <ListContent>
                      Direção de Produção: <br/>

                      Bloco B Produções <br/>
                      Instituto Transforma
                    </ListContent>
                    <ListContent>
                      Coordenação Artística: <br />
                      Yuri Rocha
                    </ListContent>
                    <ListContent>
                      Coordenação de Produção: <br />
                      Claudinei Pirelli
                    </ListContent>
                    <ListContent>
                      Coordenador Administrativo: <br />
                      André Luiz Mendes
                    </ListContent>
                    <ListContent>
                      Produção executiva: <br />
                      Sérgio Martins
                    </ListContent>
                    <ListContent>
                      Assistentes de Produção: <br />
                      Deborah Minardi <br />
                      Lélia Castro
                    </ListContent>
                  </ListColumn>
                </FichaColumnContainer>
                <FichaColumnContainer>
                  <ListColumn>
                    <ListContent>
                      Coordenação de Comunicação: <br />
                      Bloco B Produções
                    </ListContent>
                    <ListContent>
                      Gestão de Redes Sociais: <br />
                      Jenny Choe
                    </ListContent>
                    <ListContent>
                      Assistente de Mídias Sociais: <br />
                      Deborah Minardi
                    </ListContent>
                    <ListContent>
                      Assessoria de Imprensa: <br />
                      Território Comunicação
                    </ListContent>
                    <ListContent>
                      Captação de imagens, produção e edição de vídeos: <br />
                      Trupe do Filme
                    </ListContent>
                    <ListContent>
                      Produção da Mostra de Vídeos e Concurso de Fotografia: <br />
                      Jenny Choe
                    </ListContent>
                    <ListContent>
                      Assistente da Mostra de Vídeos e Concurso de Fotografia: <br />
                      Lélia Castro
                    </ListContent>
                    <ListContent>
                      Gerenciamento de Transmissão: <br />
                      Trupe do Filme
                    </ListContent>
                  </ListColumn>
                </FichaColumnContainer>
                <FichaColumnContainer>
                  <ListColumn>
                    <ListContent>
                      Designer: <br />
                      André Duarte
                    </ListContent>
                    <ListContent>
                      Web Designer / Site, App e Web: <br />
                      Pedro Motta
                    </ListContent>
                    <ListContent>
                      Edição de Conteúdo audiovisual para Web: <br />
                      Alexandre Cotinz
                    </ListContent>
                    <ListContent>
                      Desenvolvimento de APP e Site: <br />
                    </ListContent>
                    <ListContent>
                      Gerente: <br />
                      Rafael Gonçalves
                    </ListContent>
                    <ListContent>
                      Equipe: <br />
                      Gabriel Martins <br />
                      Clara Maia <br />
                      Raphael Müller <br />
                      Nayara Rossi <br />
                      Oswaldo Henrique <br />
                    </ListContent>
                    <ListContent>
                      Agradecimentos: <br />
                      Espaço Cultural Renato Russo
                    </ListContent>
                  </ListColumn>
                </FichaColumnContainer>
              </Carousel>
            </CarouselFit>
          </CarouselFlex> 
        </FichaOrganize>
      </Container>
    </Wireframe>
  )
}

export default Display
