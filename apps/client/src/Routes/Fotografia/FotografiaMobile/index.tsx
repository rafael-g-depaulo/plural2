import { useAllImagemConcurso } from 'Api/ImagensConcurso'
import Loading from 'Components/Loading'
import React, { FC } from 'react'

import Display from './Display'

export const Mobile: FC = () => {
  const imagens = useAllImagemConcurso()

  console.log("imagens", imagens)
  if (imagens.error) return <div>{imagens.error.message}</div>
  if (imagens.isLoading) return <Loading />

  let imgList = imagens.data.filter((_, i) => i < 32)

  return (
    <Display data={imgList}/>
  )
}

export default Mobile
