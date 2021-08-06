import React, { FC } from "react"
import { useTransmLink } from 'Api/Formulario'
//import { useHelloExample } from "Api/HelloApiExample"
import Loading from "Components/Loading"
import Display from "./Display"

export const TransmissaoPage: FC = () => {
  const transmLink = useTransmLink()
  if (transmLink.error) return <div>{transmLink.error.message}</div>
  if (transmLink.isLoading) return <Loading />


  console.log(transmLink.data.link)
  return (
    <Display data={transmLink.data.link}/>
  )
}

export default TransmissaoPage
