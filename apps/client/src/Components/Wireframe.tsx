import Header from './Header'
import Footer from './Footer/Footer'
import React, {FC} from 'react'
import styled from "styled-components"
// import useWidth from 'Hooks/useWidth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
`
const Content = styled.main`
  display: flex;
  height: 100%;
  flex-grow: 1;
`

export interface NavbarProps {
  onClickContato?: () => void
  onClickFicha?: () => void
  onClickFotografia?: () => void
  onClickHome?: () => void
  onClickProgramacao?: () => void
  onClickTransmissao?: () => void
}

export const Wireframe: FC<NavbarProps> = ({
  children, 
  onClickContato,
  onClickFicha,
  onClickFotografia,
  onClickHome,
  onClickProgramacao,
  onClickTransmissao,
}) => {
  
  return (
    <Container>
      <Header {...{
        onClickContato,
        onClickFicha,
        onClickFotografia,
        onClickHome,
        onClickProgramacao,
        onClickTransmissao,
      }}/>

      <Content>
        {children}
      </Content>

      <Footer/>
    </Container>
  )
}

export default Wireframe
