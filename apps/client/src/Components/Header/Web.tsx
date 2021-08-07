import React, {FC} from 'react';
import styled from 'styled-components';
import logo from '../Header/plural2_logo.png';
import { NavbarProps } from 'Components/Wireframe';

 const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 15;
  width: 100%;
  height: 80px;
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
  height: 80%;
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
  font-family: "Spock";
`;

const Img = styled.img `
  margin-top: 60px;
  width: 250px;
  height: 125px;
  object-fit: contain;
`;

const ImgContainer = styled.nav`
  align-self: flex-end;
`

const NavLink = styled.span`

  cursor: pointer;
`


export const Header: FC<NavbarProps> = ({
	onClickContato,
	onClickFicha,
	onClickFotografia,
	onClickHome,
	onClickProgramacao,
	onClickTransmissao,	
}) => {
  
  return (
    <Container>
      <HeaderContent> 
        <Nav>
          <NavLink onClick={() => onClickHome?.()} style={{width: "100%", height: "100%", textDecoration: "none", textAlign: "center"}}>
            <Text>
              Home
            </Text>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink onClick={() => onClickProgramacao?.()} style={{width: "100%", height: "100%", textDecoration: "none", textAlign: "center"}}>
            <Text>
              Programação
            </Text>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink onClick={() => onClickTransmissao?.()} style={{width: "100%", height: "100%", textDecoration: "none"}}>
            <Text>
              Transmissão do Festival
            </Text>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink onClick={() => onClickFotografia?.()} style={{width: "100%", height: "100%", textDecoration: "none"}}>
            <Text>
              Mostra de fotografia
            </Text>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink onClick={() => onClickFicha?.()} style={{width: "100%", height: "100%", textDecoration: "none"}}>
            <Text>
              Ficha Técnica
            </Text>
          </NavLink>
        </Nav>
        <Nav>
          <NavLink onClick={() => onClickContato?.()} style={{width: "100%", height: "100%", textDecoration: "none"}}>
            <Text>
              Mapeamento e Contatos
            </Text>
          </NavLink>
        </Nav>
        <ImgContainer>
          <NavLink onClick={() => onClickHome?.()} style={{width: "100%", height: "100%", textDecoration: "none"}}>
            <Img src={logo}/>
          </NavLink>
        </ImgContainer>
      </HeaderContent>
    </Container>
  )
}

export default Header
