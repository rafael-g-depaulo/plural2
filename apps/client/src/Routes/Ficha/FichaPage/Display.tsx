import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import FichaBG from './fichaImg.png'

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

const Title = styled.div`
  flex-grow: 1;
  text-align: center;
  color: white;
  padding-top: 50px;
  font-size: large;
`;

const Line = styled.div`
  background-color: white;
  height: 1px;
  width: 80%;
  radius: 3px;
`;

const List = styled.div`
  flex-grow: 10;
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  width: 100%;
`;

const ListColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

`;

const ListContent = styled.div`
  text-align: center;
  height: auto;
  color: white;
`;

export interface DisplayProps {
  data: 'teste'
}

export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {FichaBG}>
        <FichaOrganize>
          <Title> Ficha Técnica </Title>
          <Line />
          <List>
            <ListColumn>
              <ListContent>
                lorem ipsum<br />

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
            </ListColumn>
            <ListColumn>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
            </ListColumn>
            <ListColumn>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
            </ListColumn>
            <ListColumn>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
              <ListContent>
                lorem ipsum

                ispum lorem ipsum
              </ListContent>
            </ListColumn>
          </List> 
        </FichaOrganize>
      </Container>
    </Wireframe>
  )
}

export default Display
