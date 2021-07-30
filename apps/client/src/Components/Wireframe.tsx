import Header from './Header'
import Footer from './Footer/Footer'
import React, {FC} from 'react'
import styled from "styled-components"
import useWidth from 'Hooks/useWidth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
const Content = styled.main`
  display: flex;
  height: 100%;
  flex-grow: 1;
`
export const Wireframe: FC = ({children}) => {
  
  return (
    <Container>
      <Header/>

      <Content>
        {children}
      </Content>

      <Footer/>
    </Container>
  )
}

export default Wireframe
