import React, {FC} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../Header/plural2_logo.png';

 const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  height: 50px;
  background-color: #F0772D; 
`; 

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding-left: 10px;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;


  background-color: #F0772D;
  width: 200px;
  height: 30px;
  border-radius: 18px;

  &:hover{
    background-color: #CD6120;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 31px;
  justify-content: center;
  color: white;
  font-size: 20;
`;

const Img = styled.img `
  margin-top: 60px;
  width: 250px;
  height: 125px;
  object-fit: contain;
`;


export const Header: FC = () => {
  
  return (
    <Container>
      <HeaderContent> 
        <Nav>
          <Link to="/home" style={{width: "100%", height: "100%"}}>
            <Text>
              Home
            </Text>
          </Link>
        </Nav>
        <Nav>
          <Link to="/programacao" style={{width: "100%", height: "100%"}}>
            <Text>
              Programação
            </Text>
          </Link>
        </Nav>
        <Nav>
          <Link to="/transmissao" style={{width: "100%", height: "100%"}}>
            <Text>
              Transmissão do Festival
            </Text>
          </Link>
        </Nav>
        <Nav>
          <Link to="/fotografias" style={{width: "100%", height: "100%"}}>
            <Text>
              Mostra de fotografia
            </Text>
          </Link>
        </Nav>
        <Nav>
          <Link to="/ficha" style={{width: "100%", height: "100%"}}>
            <Text>
              Ficha Técnica
            </Text>
          </Link>
        </Nav>
        <Nav>
          <Link to="/contatos" style={{width: "100%", height: "100%"}}>
            <Text>
              Mapeamento e Contatos
            </Text>
          </Link>
        </Nav>
        <Img src={logo}/>
      </HeaderContent>
    </Container>
  )
}

export default Header
