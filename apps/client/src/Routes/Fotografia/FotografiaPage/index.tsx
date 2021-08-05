import { useAllImagemConcurso } from 'Api/ImagensConcurso'
import Loading from 'Components/Loading'
import React, { FC } from 'react'

import Display from './Display'

export const FotografiaPage: FC = () => {
  const imagens = useAllImagemConcurso()

  console.log("imagens", imagens)
  if (imagens.error) return <div>{imagens.error.message}</div>
  if (imagens.isLoading) return <Loading />
  
  /*
  let line1:string[] = []
  let line2:string[] = []
  let line3:string[] = []

  if(imagens.data.length <= 2){
    line1 = imagens.data
    line2 = []
    line3 = []
  } else if (2 < imagens.data.length && imagens.data.length <= 4 ) {
    line1 = imagens.data.slice(0, 2)
    line2 = imagens.data.slice(2)
    line3 = []
  } else if (4 < imagens.data.length) {
    line1 = imagens.data.slice(0, 2)
    line2 = imagens.data.slice(2, 4)
    line3 = imagens.data.slice(4)
  } */

  let row1 = imagens.data.filter((_, i) => i % 3 === 0  && i < 32)
  let row2 = imagens.data.filter((_, i) => i % 3 === 1  && i < 32)
  let row3 = imagens.data.filter((_, i) => i % 3 === 2  && i < 32)

  return (
    <Display data1={row1} data2={row2} data3={row3}/>
  )
}

export default FotografiaPage
