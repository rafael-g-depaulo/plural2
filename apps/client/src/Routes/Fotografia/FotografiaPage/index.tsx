import { useAllImagemConcurso } from 'Api/ImagensConcurso'
import Loading from 'Components/Loading'
import React, { FC } from 'react'

import Display from './Display'

export const Web: FC = () => {
  const imagens = useAllImagemConcurso()

  console.log("imagens", imagens)
  if (imagens.error) return <div>{imagens.error.message}</div>
  if (imagens.isLoading) return <Loading />

  let row1 = imagens.data.filter((_, i) => i % 3 === 0  && i < 32)
  let row2 = imagens.data.filter((_, i) => i % 3 === 1  && i < 32)
  let row3 = imagens.data.filter((_, i) => i % 3 === 2  && i < 32)

  return (
    <Display data1={row1} data2={row2} data3={row3}/>
  )
}

export default Web
