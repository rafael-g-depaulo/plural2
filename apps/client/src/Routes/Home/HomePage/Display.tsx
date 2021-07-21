import React, { FC } from "react";
import styled from 'styled-components';
import Wireframe from './../../../Components/Wireframe'
import HomeBG from '../../Home/homeImg.png'

const Container = styled.div<{bgImg: string}>`
  background-image: url("${props => props.bgImg}");
`

export interface DisplayProps {
  data: 'teste'
}


export const Display: FC<DisplayProps> = () => {
  return (
    <Wireframe>
      <Container bgImg= {HomeBG}>
 
      </Container>
    </Wireframe>
  )
}

export default Display
