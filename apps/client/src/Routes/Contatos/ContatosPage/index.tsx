import React, { FC } from "react"
import { useRedesSociais } from 'Api/RedesSociais'
// import { useFormulario } from 'Api/Formulario'
//import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

export const ContatosPage: FC = () => {
  const redes = useRedesSociais()
  if (redes.error) return <div>{redes.error.message}</div>
  if (redes.isLoading) return <Loading />

  const face = redes.data.facebook
  const inst = redes.data.instagram
  const twit = redes.data.twitter
  const yout = redes.data.youtube

  return (
    <Display youtube={yout} instagram ={inst} facebook={face} twitter={twit} form={redes.data.form}/>
  )
}

export default ContatosPage
