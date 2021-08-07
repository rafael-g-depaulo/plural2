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

  let face = redes.data.find(ele => ele.nome === "facebook")?.link
  let inst = redes.data.find(ele => ele.nome === "instagram")?.link
  let twit = redes.data.find(ele => ele.nome === "twitter")?.link
  let yout = redes.data.find(ele => ele.nome === "youtube")?.link

  return (
    <Display youtube ={yout ?? ""} instagram ={inst ?? ""} facebook ={face ?? ""} twitter ={twit ?? ""} form ={formulario.data.form ?? ""}/>
  )
}

export default ContatosPage
