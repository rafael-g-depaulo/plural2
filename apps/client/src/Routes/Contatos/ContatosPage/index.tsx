import React, { FC } from "react"
import { useAllRedesSociais } from 'Api/RedesSociais'
//import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

export const ContatosPage: FC = () => {
  const redes = useAllRedesSociais()
  if (redes.error) return <div>{redes.error.message}</div>
  if (redes.isLoading) return <Loading />

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

  console.log(yout)
  return (
    <Display youtube ={yout} instagram ={inst} facebook ={face} twitter ={twit}/>
  )
}

export default ContatosPage
