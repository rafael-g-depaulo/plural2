import React, { FC } from "react"
import { useAllRedesSociais } from 'Api/RedesSociais'
import { useFormulario } from 'Api/Formulario'
//import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

export const ContatosPage: FC = () => {
  const redes = useAllRedesSociais()
  const formulario = useFormulario()
  if (redes.error) return <div>{redes.error.message}</div>
  if (redes.isLoading) return <Loading />
  if (formulario.error) return <div>{formulario.error.message}</div>
  if (formulario.isLoading) return <Loading />

  let face = ""
  let inst = ""
  let twit = ""
  let yout = ""

  redes.data.map((element, index) => {
    if (element.name === "facebook") {
      face = element.link
    } else if (element.name === "instagram") {
      inst = element.link
    } else if (element.name === "twitter") {
      twit = element.link
    } else if (element.name === "youtube") {
      yout = element.link
    }
  })

  return (
    <Display youtube ={yout} instagram ={inst} facebook ={face} twitter ={twit} form ={formulario.data.form}/>
  )
}

export default ContatosPage
