import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import logo from '../Header/plural2_logo.png'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  height: 50px;
  left: 0px;
  top: 0px;

  background: #E83479;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: #A32756;
  width: 200px;
  height: 30px;
  border-radius: 18px;
`;

const Text = styled.div`
  justify-content: center;
  color: white;
`;

const Img = styled.img `
  margin-top: 40px;
  display: flex;
  margin-top: 60px;
  width: 250px;
  height: 125px;
  object-fit: contain;
`;

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Content>
            <Text>
              Home
            </Text>
          </Content>
        </Link>
        <Link to="/">
          <Content>
            <Text>
              Programação
            </Text>
          </Content>
        </Link>
        <Link to="/">
          <Content>
            <Text>
              Mostra de Fotografia
            </Text>
          </Content>
        </Link>
        <Link to="/">
          <Content>
            <Text>
              Transmissão do Festival
            </Text>
          </Content>
        </Link>
        <Link to="/">
          <Content>
            <Text>
              Ficha Técnica
            </Text>
          </Content>
        </Link>
        <Link to="/">
          <Content>
            <Text>
              Mapeamento e Contatos
            </Text>
          </Content>
        </Link>
        <Img src={logo} alt="Plural2" />
      </Container>
    </>
  );
}

export default Header
