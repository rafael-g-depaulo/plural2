import Header from './Header'
import Footer from './Footer/Footer'
import React, {FC} from 'react'
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
const Content = styled.main`
  height: 100%;
  width: 100%;
  flex-grow: 1;
`
export const Wireframe: FC = ({children}) => {
  
  return (
    <Container>
      <Header>

      </Header>

      <Content>
        {children}
      </Content>

      <Footer>

      </Footer>
    </Container>
  )
}

export default Wireframe
