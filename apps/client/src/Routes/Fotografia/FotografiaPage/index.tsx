import { useAllImagemConcurso } from 'Api/ImagensConcurso'
import Loading from 'Components/Loading'
import React, { FC } from 'react'

import Display from './Display'

export const FotografiaPage: FC = () => {
  const imagens = useAllImagemConcurso()

  console.log("imagens", imagens)
  if (imagens.error) return <div>{imagens.error.message}</div>
  if (imagens.isLoading) return <Loading />
  
  return (
    <Display data={imagens.data}/>
  )
}

export default FotografiaPage
