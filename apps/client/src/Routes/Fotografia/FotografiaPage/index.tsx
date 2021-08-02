import React, { FC } from "react"
//import Loading from "Components/Loading"
import Display from "./Display"
import Teste from './../../Ficha/FichaPage/fichaImg.png'

export const FotografiaPage: FC = () => {
  const imagelist = [Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste];
  return (
    <Display data={imagelist}/>
  )
}

export default FotografiaPage
