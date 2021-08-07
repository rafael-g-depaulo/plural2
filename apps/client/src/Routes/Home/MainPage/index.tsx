import React, { RefObject, useRef, FC } from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import Contatos from './../../Contatos'
import Ficha from './../../Ficha'
import Fotografia from './../../Fotografia'
import Home from './../../Home'
import Programacao from './../../Programacao'
import Transmissao from './../../Transmissao'

import Wireframe from '../../../Components/Wireframe'

import useHashUrlScroll from "Hooks/useHashUrlScroll"

export const HomePage: FC = () => {
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
  const history = useHistory()
  const { hash } = history.location

  // handle dynamic scroll
  useHashUrlScroll(eleRefs)

  return (
    <Wireframe
      onClickContato =      {() => history.location.pathname === "/" && hash === "#contato" && handleScroll(contatoRef)}
      onClickFicha =        {() => history.location.pathname === "/" && hash === "#ficha" && handleScroll(fichaRef)}
      onClickFotografia =   {() => history.location.pathname === "/" && hash === "#fotografia" && handleScroll(fotografiaRef)}
      onClickHome =         {() => history.location.pathname === "/" && hash === "#home" && handleScroll(homeRef)}
      onClickProgramacao =  {() => history.location.pathname === "/" && hash === "#programacao" && handleScroll(programacaoRef)}
      onClickTransmissao =  {() => history.location.pathname === "/" && hash === "#transmissao" && handleScroll(transmissaoRef)}
    >

      {/* SESSÃO DE HOME */}
      { 
        <>
          <div ref={homeRef} id="home">
            <Home />
          </div>
        </>
      }

      {/* SESSÃO DE PROGRAMACAO */}
      { 
        <>
          <div ref={programacaoRef} id="programacao">
            <Programacao />
          </div>
        </>
      }

      {/* SESSÃO DE TRANSMISSAO */}
      { 
        <>
          <div ref={transmissaoRef} id="transmissao">
            <Transmissao />
          </div>
        </>
      }

      {/* SESSÃO DE FOTOGRAFIAS */}
      { 
        <>
          <div ref={fotografiaRef} id="fotografia">
            <Fotografia />
          </div>
        </>
      }

      {/* SESSÃO DE FICHA */}
      { 
        <>
          <div ref={fichaRef} id="ficha">
            <Ficha />
          </div>
        </>
      }

      {/* SESSÃO DE CONTATOS */}
      { 
        <>
          <div ref={contatoRef} id="contatos">
            <Contatos />
          </div>
        </>
      }

    </Wireframe>
  )
}

export default HomePage
