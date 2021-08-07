import React, { RefObject, useRef, FC } from "react"
// import { useHistory } from "react-router-dom"
import styled from "styled-components"

import Home from '../HomePage'
import Contatos from './../../Contatos'
import Ficha from './../../Ficha'
import Fotografia from './../../Fotografia'
import Programacao from './../../Programacao'
import Transmissao from './../../Transmissao'

import Wireframe from '../../../Components/Wireframe'

import useHashUrlScroll from "Hooks/useHashUrlScroll"
import Separator from "./Separator"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
`

export const MainPage: FC = () => {
  const contatoRef      = useRef<HTMLDivElement>(null);
  const fichaRef        = useRef<HTMLDivElement>(null);
  const fotografiaRef   = useRef<HTMLDivElement>(null);
  const homeRef         = useRef<HTMLDivElement>(null);
  const programacaoRef  = useRef<HTMLDivElement>(null);
  const transmissaoRef  = useRef<HTMLDivElement>(null);

  const eleRefs = [
    contatoRef,
    fichaRef,
    fotografiaRef,
    homeRef,
    programacaoRef,
    transmissaoRef
  ]

  function handleScroll(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // history (for links)
  // const history = useHistory()
  // const { hash } = history.location

  // handle dynamic scroll
  useHashUrlScroll(eleRefs)

  return (
    <Wireframe
      onClickContato =      {() => handleScroll(contatoRef)}
      onClickFicha =        {() => handleScroll(fichaRef)}
      onClickFotografia =   {() => handleScroll(fotografiaRef)}
      onClickHome =         {() => handleScroll(homeRef)}
      onClickProgramacao =  {() => handleScroll(programacaoRef)}
      onClickTransmissao =  {() => handleScroll(transmissaoRef)}
    >
      <Container>
        <Page ref={homeRef} id="home">
          <Home />
        </Page>
        <Separator color="#E83479" />
        <Page ref={programacaoRef} id="programacao">
          <Programacao />
        </Page>
        <Separator color="#FF761E" />
        <Page ref={transmissaoRef} id="transmissao">
          <Transmissao />
        </Page>
        <Separator color="#007582" />
        <Page ref={fotografiaRef} id="fotografia">
          <Fotografia />
        </Page>
        <Separator color="#FF2E7D" />
        <Page ref={fichaRef} id="ficha">
          <Ficha />
        </Page>
        <Separator color="#00AD52" />
        <Page ref={contatoRef} id="contato">
          <Contatos />
        </Page>
      </Container>

    </Wireframe>
  )
}

export default MainPage
